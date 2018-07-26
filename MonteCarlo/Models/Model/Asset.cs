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

        public double currAmount { get; set; } = 0;
        public double addPerYear { get; set; } = 0;
        public int yearsOfAdd { get; set; } = 0;
        public int yearsOfWith { get; set; } = 0;
        public double withperYear { get; set; } = 0;
        public string name { get; set; }

        public Asset(Stocks stocks = null, Bonds bonds = null, Cash cash = null,  double currAmount = 0, double addPerYear = 0, int yearsOfAdd = 0, int yearsOfWith = 0, double withperYear = 0, string name = "")
        {
            this.stocks = stocks;
            this.bonds = bonds;
            this.cash = cash;
            this.currAmount = currAmount;
            this.addPerYear = addPerYear;
            this.yearsOfAdd = yearsOfAdd;
            this.yearsOfWith = yearsOfWith;
            this.withperYear = withperYear;
            this.name = name;
        }
    }
}
