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

        public Asset(Stocks stocks, Bonds bonds, Cash cash, double currAmount, double addPerYear, int yearsOfAdd, int yearsOfWith, double withperYear)
        {
            this.stocks = stocks;
            this.bonds = bonds;
            this.cash = cash;
            this.currAmount = currAmount;
            this.addPerYear = addPerYear;
            this.yearsOfAdd = yearsOfAdd;
            this.yearsOfWith = yearsOfWith;
            this.withperYear = withperYear;
        }
    }
}
