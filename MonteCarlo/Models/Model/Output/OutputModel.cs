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
        public List<List<List<List<Yearly>>>> output;

        public OutputModel(InputModel model)
        {
            Asset[] assets = model.assetHolder;

            WeightRate test = new WeightRate(assets[0]);
        }
    }
}
