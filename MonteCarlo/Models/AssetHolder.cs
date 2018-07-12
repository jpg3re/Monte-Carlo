using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models
{
    public class AssetHolder

    {
        public Corporations corporations { get; set; }
        public LargeCap largeCap { get; set; }
        public SmallCap smallCap { get; set; }
        public UsTreasury usTreasury { get; set; }
        public double currAmount { get; set; }
        public double addPerYear { get; set; }
        public int yearsOfAdd { get; set; }
        public int yearsOfWith { get; set; }

    }
}
