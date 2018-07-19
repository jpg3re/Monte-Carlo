using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.Model.UpperMidLower
{
    public abstract class Breakdown
    {
        public double expectedReturn
        {
            get { return _expectedReturn; }
            set { _expectedReturn = value / 100; }
        }
        private double _expectedReturn;

        public double volatility
        {
            get { return _volatility; }
            set { _volatility = value / 100; }
        }
        private double _volatility;

        public double portfolioWeight
        {
            get { return _portfolioWeight; }
            set { _portfolioWeight = value / 100; }
        }
        private double _portfolioWeight;
    }
}
