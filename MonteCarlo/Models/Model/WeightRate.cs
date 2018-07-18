using MonteCarlo.Models.MathThings;
using MonteCarlo.Models.MathThings.PDFs;
using MonteCarlo.Models.Model.UpperMidLower;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.Model
{
    public class WeightRate
    {
        public List<List<double>> weightedRatesNormal = new List<List<double>>();
        public List<List<double>> weightedRatesLaplace = new List<List<double>>();
        public List<List<double>> weightedRatesT = new List<List<double>>();
        private Asset asset;

        public WeightRate(Asset asset)
        {
            this.asset = asset;
            List<Task> tasks = new List<Task>();

            tasks.Add(Task.Run(() => CalculateRates(PDFType.Normal)));
            tasks.Add(Task.Run(() => CalculateRates(PDFType.Laplace)));
            tasks.Add(Task.Run(() => CalculateRates(PDFType.T)));

            Task.WaitAll(tasks.ToArray());
            Console.WriteLine("WeightRate done");
        }

        private void CalculateRates(PDFType pdf)
        {
            List<Task<List<List<double>>>> tasks = new List<Task<List<List<double>>>>();

            tasks.Add(Task.Run(() => RunCarlo(asset.stocks.lower, pdf)));
            tasks.Add(Task.Run(() => RunCarlo(asset.stocks.mid, pdf)));
            tasks.Add(Task.Run(() => RunCarlo(asset.stocks.upper, pdf)));

            tasks.Add(Task.Run(() => RunCarlo(asset.bonds.lower, pdf)));
            tasks.Add(Task.Run(() => RunCarlo(asset.bonds.mid, pdf)));
            tasks.Add(Task.Run(() => RunCarlo(asset.bonds.upper, pdf)));

            tasks.Add(Task.Run(() => RunCarlo(asset.cash.lower, pdf)));
            tasks.Add(Task.Run(() => RunCarlo(asset.cash.mid, pdf)));
            tasks.Add(Task.Run(() => RunCarlo(asset.cash.upper, pdf)));

            Task.WaitAll(tasks.ToArray());
            MakeWeightRates(pdf, tasks);
        }

        private List<List<double>> RunCarlo(Breakdown breakdown, PDFType pdf)
        {
            Ziggurat zigg;
            switch (pdf)
            {
                case PDFType.Normal:
                    zigg = Startup.normalZigg;
                    break;
                case PDFType.Laplace:
                    zigg = Startup.laplaceZigg;
                    break;
                case PDFType.T:
                    zigg = Startup.tZigg;
                    break;
                default:
                    zigg = Startup.normalZigg;
                    break;
            }

            Carlo carlo = new Carlo(breakdown.expectedReturn, breakdown.volatility, asset.yearsOfAdd + asset.yearsOfWith, zigg);
            List<List<double>> rates = carlo.rates.Select(element => element.Select(individual => individual * breakdown.portfolioWeight).ToList()).ToList();
            return rates;
        }


        private void MakeWeightRates(PDFType pdf, List<Task<List<List<double>>>> tasks)
        {
            List<double> weightedTrial;
            double currentTotal = 0;
            for (int i = 0; i < tasks[0].Result.Count; i++)
            {
                weightedTrial = new List<double>();
                for (int j = 0; j < tasks[0].Result[0].Count; j++)
                {
                    tasks.ForEach(a =>
                    {
                        currentTotal += a.Result[i][j];
                    });
                    weightedTrial.Add(currentTotal);
                    currentTotal = 0;
                }
                switch (pdf)
                {
                    case PDFType.Normal:
                        weightedRatesNormal.Add(weightedTrial);
                        break;
                    case PDFType.Laplace:
                        weightedRatesLaplace.Add(weightedTrial);
                        break;
                    case PDFType.T:
                        weightedRatesT.Add(weightedTrial);
                        break;
                }
            }
        }
    }
}
