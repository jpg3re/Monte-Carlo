using MonteCarlo.Models.MathThings.PDFs;
using MonteCarlo.Models.Model.Output;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MonteCarlo.Models.Utilities;
using MonteCarlo.Utilities;

namespace MonteCarlo.Models.Model
{
    public class Distributions
    {
        public double probabilityOfSuccess;
        public List<Percentiles> percentiles;
        private List<Percentiles> Allpercentiles;
        private int yearsOfAdditions;
        private int yearsOfWithdrawls;
        private InputModel model;
        private double additions;
        private double withdrawls;
        private double initialAmount;
        public Asset asset;
        private List<List<double>> weightedRates;
        private Mutex mutex = new Mutex();
        private Mutex withdrawlMutex = new Mutex();

        public Distributions(Asset asset, WeightRate weightRate, PDFType pdf, InputModel model)
        {
            yearsOfAdditions = asset.yearsOfAdd;
            yearsOfWithdrawls = asset.yearsOfWith;
            additions = asset.addPerYear;
            withdrawls = asset.withperYear;
            initialAmount = asset.currAmount;
            this.model = model;
            this.asset = asset;
            percentiles = new List<Percentiles>(9);

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
            Allpercentiles = new List<Percentiles>(weightedRates.Count);
            GetYearlyBreakdown();
            CalculateAverageWithdrawls();
            Sort();
            ConfidenceIntervals();
            ProbabilityOfSuccess();
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

            for (int i = 0; i < yearsOfAdditions; i++)
            {
                currentValue += additions;
                currentValue += currentValue * rate[i];
                Math.Max(currentValue, 0);
                yearlies.Add(new Yearly(Math.Round(currentValue, 2), Math.Round(additions, 2), Math.Round(rate[i], 4)));
            }
            for (int i = yearsOfAdditions; i < yearsOfWithdrawls + yearsOfAdditions; i++)
            {
                previousYear = currentValue;
                withdrawls = PaymentCalculator.GetPayments(previousYear, rate[i], (yearsOfWithdrawls + yearsOfAdditions) - i);
                currentValue += currentValue * rate[i];
                currentValue -= withdrawls;

                yearlies.Add(new Yearly(Math.Round(currentValue, 2), Math.Round(-withdrawls, 2), Math.Round(rate[i], 4)));
            }

            mutex.WaitOne();
            Allpercentiles.Add(new Percentiles(yearlies));
            mutex.ReleaseMutex();
        }

        private void CalculateAverageWithdrawls()
        {
            Parallel.For(0, Allpercentiles.Count, i =>
            {
                double total = 0;
                for (int j = yearsOfAdditions; j < yearsOfAdditions + yearsOfWithdrawls; j++)
                {
                    total -= Allpercentiles[i].yearlies[j].withdrawl;
                }
                withdrawlMutex.WaitOne();
                Allpercentiles[i].averageWithdrawls = (Math.Round(total / yearsOfWithdrawls, 2));
                withdrawlMutex.ReleaseMutex();
            });
        }

        private void ConfidenceIntervals()
        {
            int multiplier = Carlo.trials / 100;
            for (int j = 1; j < 10; j++)
            {
                percentiles.Add(Allpercentiles[(10 * j) * multiplier]);
            }
        }

        private void Sort()
        {
            MonteCompare compare = new MonteCompare();
            StoParallelMergeSort<Percentiles> mergeSort = new StoParallelMergeSort<Percentiles>(compare);
            mergeSort.Sort(Allpercentiles, false);
        }

        private void ProbabilityOfSuccess()
        {
            int successCount = 0;
            double total;
            Allpercentiles.ForEach(percentile =>
            {
                total = 0;
                for (int i = yearsOfAdditions; i < yearsOfAdditions+yearsOfWithdrawls; i++)
                {
                    total -= percentile.yearlies[i].withdrawl;
                }
                if(total >= (asset.withperYear * yearsOfWithdrawls))
                {
                    successCount++;
                }
            });
            probabilityOfSuccess = (double)successCount / (double)Carlo.trials;
        }
    }
}
