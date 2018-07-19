using MonteCarlo.Models.MathThings.PDFs;
using MonteCarlo.Models.Model.Output;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MonteCarlo.Models.Utilities;

namespace MonteCarlo.Models.Model
{
    public class Distributions
    {
        public List<List<Yearly>> percentiles;
        public double averageWithdrawls;
        private int yearsOfAdditions;
        private int yearsOfWithdrawls;
        private double additions;
        private double withdrawls;
        private double initialAmount;
        private List<List<double>> weightedRates;
        private Mutex mutex = new Mutex();

        public Distributions(Asset asset, WeightRate weightRate, PDFType pdf)
        {
            yearsOfAdditions = asset.yearsOfAdd;
            yearsOfWithdrawls = asset.yearsOfWith;
            additions = asset.addPerYear;
            withdrawls = asset.withperYear;
            initialAmount = asset.currAmount;
            
            switch (pdf)
            {
                case PDFType.Normal:
                    weightedRates = weightRate.weightedRatesNormal;
                    break;
                case PDFType.Laplace:
                    weightedRates = weightRate.weightedRatesLaplace;
                    break;
                case PDFType.T:
                    weightedRates = weightRate.weightedRatesT;
                    break;
            }

            percentiles = new List<List<Yearly>>(weightedRates.Count);
            Parallel.For(0, weightedRates.Count, element =>
            {
                calculateYearsOfAdditions(weightedRates[element]);
            });

        }

        private void calculateYearsOfAdditions(List<double> rate)
        {
            List<Yearly> yearlies = new List<Yearly>(yearsOfAdditions + yearsOfWithdrawls);
            double currentValue = initialAmount;
            double previousYear;

            for(int i = 0; i < yearsOfAdditions; i++)
            {
                currentValue += additions;
                currentValue += currentValue * rate[i];
                yearlies.Add(new Yearly(currentValue, additions, rate[i]));
            }
            for(int i = yearsOfAdditions; i < yearsOfWithdrawls + yearsOfAdditions; i++)
            {
                previousYear = currentValue;   
                currentValue = PaymentCalculator.GetPayments(previousYear, rate[i], (yearsOfWithdrawls + yearsOfAdditions) - i);
                withdrawls = previousYear - currentValue;
                yearlies.Add(new Yearly(Math.Round(currentValue,2), Math.Round(-withdrawls,2), Math.Round(rate[i],4)));
            }

            mutex.WaitOne();
            percentiles.Add(yearlies);
            mutex.ReleaseMutex();
        }

        private void CalculateAverageWithdrawls()
        {
            for(int i = yearsOfAdditions; i < yearsOfAdditions + yearsOfWithdrawls; i++)
            {
                
            }
        }
    }
}
