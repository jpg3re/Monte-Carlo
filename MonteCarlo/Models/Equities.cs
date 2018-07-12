using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models
{
    public abstract class Equities
    {
        public string expectedReturn { get; set; }
        public string volatility { get; set; }
        public string portfolioWeight { get; set; }


    }
}
