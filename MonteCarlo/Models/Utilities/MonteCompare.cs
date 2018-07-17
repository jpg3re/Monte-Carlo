using System.Collections.Generic;
using System.Linq;


namespace MonteCarlo.Utilities
{
    public class MonteCompare : IComparer<List<double>>
    {
        public int Compare(List<double> x, List<double> y)
        {
            return x.Last().CompareTo(y.Last());
        }
    }
}
