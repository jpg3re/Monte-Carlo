using MonteCarlo.Models.MathThings.PDFs;
using MonteCarlo.Models.Model.Output;
using MonteCarlo.Models.Model.UpperMidLower;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.Model
{
    public class OutputModel
    {
        private int amount;
        private List<Asset> assets;
        private InputModel model;
        private Task<WeightRate>[] rateTasks;
        private Task<Distributions>[] distributionTasks;
        public List<Distributions> distributions;      
        private double[] historicalRates = {9.68,14.68,10.71,15.91,9.32,19.06,7.06,2.91,9.01,2.87,5.84,2.85,5.88,3.48,0.18,0.12,2.32,2.19};

        public OutputModel(InputModel model)
        {
            amount = model.numberOfAssets;
            assets = model.assetHolder.ToList();
            this.model = model;
            rateTasks = new Task<WeightRate>[amount * 2];
            distributionTasks = new Task<Distributions>[amount*6];
            distributions = new List<Distributions>(amount*6);
            distributions = new List<Distributions>(amount*6);
            MakeHistoricalAssets();
            CalculateWeightRate();
            CalculateDistributions();
        }

        private void MakeHistoricalAssets()
        {
            int counter = amount; 
            for(int i = 0; i < amount; i++)
            {
                assets[counter] = (new Asset(
                    new Stocks(new Upper(historicalRates[0], historicalRates[1], assets[i].stocks.upper.portfolioWeight * 100), new Mid(historicalRates[2],historicalRates[3], assets[i].stocks.mid.portfolioWeight * 100), new Lower(historicalRates[4], historicalRates[5], assets[i].stocks.lower.portfolioWeight * 100)),
                    new Bonds(new Upper(historicalRates[6], historicalRates[7], assets[i].bonds.upper.portfolioWeight * 100), new Mid(historicalRates[8], historicalRates[9], assets[i].bonds.mid.portfolioWeight * 100), new Lower(historicalRates[10], historicalRates[11], assets[i].bonds.lower.portfolioWeight * 100)),
                    new Cash(new Upper(historicalRates[12], historicalRates[13], assets[i].cash.upper.portfolioWeight * 100), new Mid(historicalRates[14], historicalRates[15], assets[i].cash.mid.portfolioWeight * 100), new Lower(historicalRates[16], historicalRates[17], assets[i].cash.lower.portfolioWeight * 100)),
                    assets[i].currAmount,assets[i].addPerYear,assets[i].yearsOfAdd,assets[i].yearsOfWith,assets[i].withperYear));
                counter++;
            }
        }

        //These next two classes should have been implemented using loops but I had problems with threads coming back and trying to access indexes out of bound so this is my solution
        private void CalculateWeightRate()
        {
            if (amount == 3)
            {
                rateTasks[0] = Task.Run(() => { return new WeightRate(assets[0]); });
                rateTasks[1] = Task.Run(() => { return new WeightRate(assets[1]); });
                rateTasks[2] = Task.Run(() => { return new WeightRate(assets[2]); });
                rateTasks[3] = Task.Run(() => { return new WeightRate(assets[3]); });
                rateTasks[4] = Task.Run(() => { return new WeightRate(assets[4]); });
                rateTasks[5] = Task.Run(() => { return new WeightRate(assets[5]); });
            }
            else if (amount == 2)
            {
                rateTasks[0] = Task.Run(() => { return new WeightRate(assets[0]); });
                rateTasks[1] = Task.Run(() => { return new WeightRate(assets[1]); });
                rateTasks[2] = Task.Run(() => { return new WeightRate(assets[2]); });
                rateTasks[3] = Task.Run(() => { return new WeightRate(assets[3]); });
            }
            else
            {
                rateTasks[0] = Task.Run(() => { return new WeightRate(assets[0]); });
                rateTasks[1] = Task.Run(() => { return new WeightRate(assets[1]); });
            }
            Task.WaitAll(rateTasks);
        }

        private void CalculateDistributions()
        {
            if (amount == 3)
            {
                distributionTasks[0] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.Normal, model); });
                distributionTasks[1] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.Laplace, model); });
                distributionTasks[2] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.T, model); });

                distributionTasks[3] = Task.Run(() => { return new Distributions(assets[1], rateTasks[1].Result, PDFType.Normal, model); });
                distributionTasks[4] = Task.Run(() => { return new Distributions(assets[1], rateTasks[1].Result, PDFType.Laplace, model); });
                distributionTasks[5] = Task.Run(() => { return new Distributions(assets[1], rateTasks[1].Result, PDFType.T, model); });

                distributionTasks[6] = Task.Run(() => { return new Distributions(assets[2], rateTasks[2].Result, PDFType.Normal, model); });
                distributionTasks[7] = Task.Run(() => { return new Distributions(assets[2], rateTasks[2].Result, PDFType.Laplace, model); });
                distributionTasks[8] = Task.Run(() => { return new Distributions(assets[2], rateTasks[2].Result, PDFType.T, model); });

                distributionTasks[9] = Task.Run(() => { return new Distributions(assets[3], rateTasks[3].Result, PDFType.Normal, model); });
                distributionTasks[10] = Task.Run(() => { return new Distributions(assets[3], rateTasks[3].Result, PDFType.Laplace, model); });
                distributionTasks[11] = Task.Run(() => { return new Distributions(assets[3], rateTasks[3].Result, PDFType.T, model); });

                distributionTasks[12] = Task.Run(() => { return new Distributions(assets[4], rateTasks[4].Result, PDFType.Normal, model); });
                distributionTasks[13] = Task.Run(() => { return new Distributions(assets[4], rateTasks[4].Result, PDFType.Laplace, model); });
                distributionTasks[14] = Task.Run(() => { return new Distributions(assets[4], rateTasks[4].Result, PDFType.T, model); });

                distributionTasks[15] = Task.Run(() => { return new Distributions(assets[5], rateTasks[5].Result, PDFType.Normal, model); });
                distributionTasks[16] = Task.Run(() => { return new Distributions(assets[5], rateTasks[5].Result, PDFType.Laplace, model); });
                distributionTasks[17] = Task.Run(() => { return new Distributions(assets[5], rateTasks[5].Result, PDFType.T, model); });

                Task.WaitAll(distributionTasks);
                distributions.Add(distributionTasks[0].Result);
                distributions.Add(distributionTasks[1].Result);
                distributions.Add(distributionTasks[2].Result);
                distributions.Add(distributionTasks[3].Result);
                distributions.Add(distributionTasks[4].Result);
                distributions.Add(distributionTasks[5].Result);
                distributions.Add(distributionTasks[6].Result);
                distributions.Add(distributionTasks[7].Result);
                distributions.Add(distributionTasks[8].Result);
                distributions.Add(distributionTasks[9].Result);
                distributions.Add(distributionTasks[10].Result);
                distributions.Add(distributionTasks[11].Result);
                distributions.Add(distributionTasks[12].Result);
                distributions.Add(distributionTasks[13].Result);
                distributions.Add(distributionTasks[14].Result);
                distributions.Add(distributionTasks[15].Result);
                distributions.Add(distributionTasks[16].Result);
                distributions.Add(distributionTasks[17].Result);
            }
            else if (amount == 2)
            {
                distributionTasks[0] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.Normal, model); });
                distributionTasks[1] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.Laplace, model); });
                distributionTasks[2] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.T, model); });

                distributionTasks[3] = Task.Run(() => { return new Distributions(assets[1], rateTasks[1].Result, PDFType.Normal, model); });
                distributionTasks[4] = Task.Run(() => { return new Distributions(assets[1], rateTasks[1].Result, PDFType.Laplace, model); });
                distributionTasks[5] = Task.Run(() => { return new Distributions(assets[1], rateTasks[1].Result, PDFType.T, model); });

                distributionTasks[6] = Task.Run(() => { return new Distributions(assets[2], rateTasks[2].Result, PDFType.Normal, model); });
                distributionTasks[7] = Task.Run(() => { return new Distributions(assets[2], rateTasks[2].Result, PDFType.Laplace, model); });
                distributionTasks[8] = Task.Run(() => { return new Distributions(assets[2], rateTasks[2].Result, PDFType.T, model); });

                distributionTasks[9] = Task.Run(() => { return new Distributions(assets[3], rateTasks[3].Result, PDFType.Normal, model); });
                distributionTasks[10] = Task.Run(() => { return new Distributions(assets[3], rateTasks[3].Result, PDFType.Laplace, model); });
                distributionTasks[11] = Task.Run(() => { return new Distributions(assets[3], rateTasks[3].Result, PDFType.T, model); });

                Task.WaitAll(distributionTasks);
                distributions.Add(distributionTasks[0].Result);
                distributions.Add(distributionTasks[1].Result);
                distributions.Add(distributionTasks[2].Result);
                distributions.Add(distributionTasks[3].Result);
                distributions.Add(distributionTasks[4].Result);
                distributions.Add(distributionTasks[5].Result);
                distributions.Add(distributionTasks[6].Result);
                distributions.Add(distributionTasks[7].Result);
                distributions.Add(distributionTasks[8].Result);
                distributions.Add(distributionTasks[9].Result);
                distributions.Add(distributionTasks[10].Result);
                distributions.Add(distributionTasks[11].Result);
            }
            else
            {
                distributionTasks[0] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.Normal, model); });
                distributionTasks[1] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.Laplace, model); });
                distributionTasks[2] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.T, model); });

                distributionTasks[3] = Task.Run(() => { return new Distributions(assets[1], rateTasks[1].Result, PDFType.Normal, model); });
                distributionTasks[4] = Task.Run(() => { return new Distributions(assets[1], rateTasks[1].Result, PDFType.Laplace, model); });
                distributionTasks[5] = Task.Run(() => { return new Distributions(assets[1], rateTasks[1].Result, PDFType.T, model); });

                Task.WaitAll(distributionTasks);
                distributions.Add(distributionTasks[0].Result);
                distributions.Add(distributionTasks[1].Result);
                distributions.Add(distributionTasks[2].Result);
                distributions.Add(distributionTasks[3].Result);
                distributions.Add(distributionTasks[4].Result);
                distributions.Add(distributionTasks[5].Result);
            }          
        }
    }
}
