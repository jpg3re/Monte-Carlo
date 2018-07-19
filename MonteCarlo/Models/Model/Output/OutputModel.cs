using MonteCarlo.Models.MathThings.PDFs;
using MonteCarlo.Models.Model.Output;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.Model
{
    public class OutputModel
    {
        //ok so we have a list of assets and for each asset we have a list of distributions and for each distribution we have a list of percentiles and for each percentile we have a list of Yearly breakdowns
        //wow
        //private List<List<List<List<Yearly>>>> output;
        private int amount;
        private Asset[] assets;
        private Task<WeightRate>[] rateTasks;
        private Task<Distributions>[] distributionTasks;
        public List<List<Percentiles>> distributions;

        public OutputModel(InputModel model)
        {
            amount = model.numberOfAssets;
            assets = model.assetHolder;
            rateTasks = new Task<WeightRate>[amount];
            distributionTasks = new Task<Distributions>[amount*3];
            distributions = new List<List<Percentiles>>(amount*3);
            CalculateWeightRate();
            CalculateDistributions();
        }

        private void MakeAssets()
        {

        }

        //These next two classes should have been implemented using loops but I had problems with threads coming back and trying to access indexes out of bound so this is my solution
        private void CalculateWeightRate()
        {
            if (amount == 3)
            {
                rateTasks[0] = Task.Run(() => { return new WeightRate(assets[0]); });
                rateTasks[1] = Task.Run(() => { return new WeightRate(assets[1]); });
                rateTasks[2] = Task.Run(() => { return new WeightRate(assets[2]); });
            }
            else if (amount == 2)
            {
                rateTasks[0] = Task.Run(() => { return new WeightRate(assets[0]); });
                rateTasks[1] = Task.Run(() => { return new WeightRate(assets[1]); });
            }
            else
            {
                rateTasks[0] = Task.Run(() => { return new WeightRate(assets[0]); });
            }
            Task.WaitAll(rateTasks);
        }

        private void CalculateDistributions()
        {
            if (amount == 3)
            {
                distributionTasks[0] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.Normal); });
                distributionTasks[1] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.Laplace); });
                distributionTasks[2] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.T); });

                distributionTasks[3] = Task.Run(() => { return new Distributions(assets[1], rateTasks[1].Result, PDFType.Normal); });
                distributionTasks[4] = Task.Run(() => { return new Distributions(assets[1], rateTasks[1].Result, PDFType.Laplace); });
                distributionTasks[5] = Task.Run(() => { return new Distributions(assets[1], rateTasks[1].Result, PDFType.T); });

                distributionTasks[6] = Task.Run(() => { return new Distributions(assets[2], rateTasks[2].Result, PDFType.Normal); });
                distributionTasks[7] = Task.Run(() => { return new Distributions(assets[2], rateTasks[2].Result, PDFType.Laplace); });
                distributionTasks[8] = Task.Run(() => { return new Distributions(assets[2], rateTasks[2].Result, PDFType.T); });

                Task.WaitAll(distributionTasks);
                distributions.Add(distributionTasks[0].Result.percentiles);
                distributions.Add(distributionTasks[1].Result.percentiles);
                distributions.Add(distributionTasks[2].Result.percentiles);
                distributions.Add(distributionTasks[3].Result.percentiles);
                distributions.Add(distributionTasks[4].Result.percentiles);
                distributions.Add(distributionTasks[5].Result.percentiles);
                distributions.Add(distributionTasks[6].Result.percentiles);
                distributions.Add(distributionTasks[7].Result.percentiles);
                distributions.Add(distributionTasks[8].Result.percentiles);
            }
            else if (amount == 2)
            {
                distributionTasks[0] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.Normal); });
                distributionTasks[1] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.Laplace); });
                distributionTasks[2] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.T); });

                distributionTasks[3] = Task.Run(() => { return new Distributions(assets[1], rateTasks[1].Result, PDFType.Normal); });
                distributionTasks[4] = Task.Run(() => { return new Distributions(assets[1], rateTasks[1].Result, PDFType.Laplace); });
                distributionTasks[5] = Task.Run(() => { return new Distributions(assets[1], rateTasks[1].Result, PDFType.T); });

                Task.WaitAll(distributionTasks);
                distributions.Add(distributionTasks[0].Result.percentiles);
                distributions.Add(distributionTasks[1].Result.percentiles);
                distributions.Add(distributionTasks[2].Result.percentiles);
                distributions.Add(distributionTasks[3].Result.percentiles);
                distributions.Add(distributionTasks[4].Result.percentiles);
                distributions.Add(distributionTasks[5].Result.percentiles);
            }
            else
            {
                distributionTasks[0] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.Normal); });
                distributionTasks[1] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.Laplace); });
                distributionTasks[2] = Task.Run(() => { return new Distributions(assets[0], rateTasks[0].Result, PDFType.T); });

                Task.WaitAll(distributionTasks);
                distributions.Add(distributionTasks[0].Result.percentiles);
                distributions.Add(distributionTasks[1].Result.percentiles);
                distributions.Add(distributionTasks[2].Result.percentiles);
            }          
        }
    }
}
