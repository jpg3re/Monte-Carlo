using MonteCarlo.Models.Model.UpperMidLower;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.Model
{
    public class Lower : Breakdown
    {
        public Lower(double expectedReturn, double volatility, double portfolioWeight) : base(expectedReturn, volatility, portfolioWeight)
        {
        }
    }
}
