using MonteCarlo.Models.MathThings.PDFs;
using MonteCarlo.Models.Model.Output;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MonteCarlo.Models.Utilities;
using MonteCarlo.Utilities;

namespace MonteCarlo.Models.Model
{
    public class Distributions
    {
        public List<Percentiles> percentiles;
        private int yearsOfAdditions;
        private int yearsOfWithdrawls;
        private double additions;
        private double withdrawls;
        private double initialAmount;
        private List<List<double>> weightedRates;
        private Mutex mutex = new Mutex();
        private Mutex withdrawlMutex = new Mutex();

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
            percentiles = new List<Percentiles>(weightedRates.Count);
            GetYearlyBreakdown();
            CalculateAverageWithdrawls();
            Sort();
        }

        private void GetYearlyBreakdown()
        {
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
                yearlies.Add(new Yearly(Math.Round(currentValue,2), Math.Round(additions,2), Math.Round(rate[i], 4)));
            }
            for(int i = yearsOfAdditions; i < yearsOfWithdrawls + yearsOfAdditions; i++)
            {
                previousYear = currentValue;   
                withdrawls = PaymentCalculator.GetPayments(previousYear, rate[i], (yearsOfWithdrawls + yearsOfAdditions) - i);
                currentValue += currentValue * rate[i];
                currentValue -= withdrawls;
                
                yearlies.Add(new Yearly(Math.Round(currentValue,2), Math.Round(-withdrawls,2), Math.Round(rate[i],4)));
            }

            mutex.WaitOne();
            percentiles.Add(new Percentiles(yearlies));
            mutex.ReleaseMutex();
        }

        private void CalculateAverageWithdrawls()
        {
            Parallel.For(0, percentiles.Count, i =>
            {
                double total = 0;
                for (int j = yearsOfAdditions; j < yearsOfAdditions + yearsOfWithdrawls; j++)
                {
                    total -= percentiles[i].yearlies[j].withdrawl;
                }
                withdrawlMutex.WaitOne();
                percentiles[i].averageWithdrawls = (Math.Round(total / yearsOfWithdrawls,2));
                withdrawlMutex.ReleaseMutex();
            });
        }

        private void Sort()
        {
            MonteCompare compare = new MonteCompare();
            StoParallelMergeSort<Percentiles> mergeSort = new StoParallelMergeSort<Percentiles>(compare);
            mergeSort.Sort(percentiles, false);
        }
    }
}
