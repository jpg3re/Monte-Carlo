using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.Model
{
    public class Asset
    {
        public Stocks stocks { get; set; }
        public Bonds bonds { get; set; }
        public Cash cash { get; set; }

        public double currAmount { get; set; }
        public double addPerYear { get; set; }
        public double yearsOfAdd { get; set; }
        public double yearsOfWith { get; set; }

    }
}
