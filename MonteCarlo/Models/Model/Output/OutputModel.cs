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
        private Asset[] assets;
        private InputModel model;
        private List<Task> rateTasks;
        private WeightRate[] weightRates;
        public List<string> names;
        public List<Distributions> distributions;
        private double[] historicalRates = { 9.68, 14.68, 10.71, 15.91, 9.32, 19.06, 7.06, 2.91, 9.01, 2.87, 5.84, 2.85, 5.88, 3.48, 0.18, 0.12, 2.32, 2.19 };

        public OutputModel(InputModel model)
        {
            amount = model.numberOfAssets;
            assets = new Asset[amount * 2];
            this.model = model;
            weightRates = new WeightRate[amount * 2];
            names = new List<string>(amount);
            rateTasks = new List<Task>(amount * 2);
            distributions = new List<Distributions>(amount * 6);
            MakeHistoricalAssets();
            Names();
            CalculateWeightRate();
        }

        private void Names()
        {
            for (int i = 0; i < amount * 2; i += 2)
            {
                names.Add(assets[i].name);
            }
        }

        private void MakeHistoricalAssets()
        {
            int counter = 1;
            int anotherCounter = 0;
            for (int i = 0; i < amount * 2; i += 2)
            {
                assets[i] = model.assetHolder[anotherCounter];
                assets[counter] = (new Asset(
                    new Stocks(new Upper(historicalRates[0], historicalRates[1], model.assetHolder[anotherCounter].stocks.upper.portfolioWeight * 100), new Mid(historicalRates[2], historicalRates[3], model.assetHolder[anotherCounter].stocks.mid.portfolioWeight * 100), new Lower(historicalRates[4], historicalRates[5], model.assetHolder[anotherCounter].stocks.lower.portfolioWeight * 100)),
                    new Bonds(new Upper(historicalRates[6], historicalRates[7], model.assetHolder[anotherCounter].bonds.upper.portfolioWeight * 100), new Mid(historicalRates[8], historicalRates[9], model.assetHolder[anotherCounter].bonds.mid.portfolioWeight * 100), new Lower(historicalRates[10], historicalRates[11], model.assetHolder[anotherCounter].bonds.lower.portfolioWeight * 100)),
                    new Cash(new Upper(historicalRates[12], historicalRates[13], model.assetHolder[anotherCounter].cash.upper.portfolioWeight * 100), new Mid(historicalRates[14], historicalRates[15], model.assetHolder[anotherCounter].cash.mid.portfolioWeight * 100), new Lower(historicalRates[16], historicalRates[17], model.assetHolder[anotherCounter].cash.lower.portfolioWeight * 100)),
                    model.assetHolder[anotherCounter].currAmount, model.assetHolder[anotherCounter].addPerYear, model.assetHolder[anotherCounter].yearsOfAdd, model.assetHolder[anotherCounter].yearsOfWith, model.assetHolder[anotherCounter].withperYear, model.assetHolder[anotherCounter].name + " historical"));
                counter += 2;
                anotherCounter++;
            }
        }

        private void CalculateWeightRate()
        {
            for(int element = 0; element < amount * 2; element++)
            {
                weightRates[element] = new WeightRate(assets[element]);
                rateTasks.Add(Task.Run(() => { distributions.Add(new Distributions(assets[element], weightRates[element], PDFType.Normal, model)); }));
                rateTasks.Add(Task.Run(() => { distributions.Add(new Distributions(assets[element], weightRates[element], PDFType.Laplace, model)); }));
                rateTasks.Add(Task.Run(() => { distributions.Add(new Distributions(assets[element], weightRates[element], PDFType.T, model)); }));
                Task.WaitAll(rateTasks.ToArray());
            };           
        }
    }
}
