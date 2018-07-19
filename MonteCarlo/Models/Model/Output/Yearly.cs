using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.Model.Output
{
    public class Yearly
    {
        public double amount { get; set; }
        public double withdrawl { get; set; }
        public double growth { get; set; }

        public Yearly(double amount, double withdrawl, double growth)
        {
            this.amount = amount;
            this.withdrawl = withdrawl;
            this.growth = growth;
        }
    }
}
