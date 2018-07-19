using MonteCarlo.Models.Model;
using MonteCarlo.Models.Model.Output;
using System.Collections.Generic;
using System.Linq;


namespace MonteCarlo.Utilities
{
    public class MonteCompare : IComparer<Percentiles>
    {
        public int Compare(Percentiles x, Percentiles y)
        {
            return x.averageWithdrawls.CompareTo(y.averageWithdrawls);
        }
    }
}
