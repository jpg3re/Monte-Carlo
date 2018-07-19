using MonteCarlo.Models.Model.Output;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.Model
{
    public class Percentiles
    {
        public List<Yearly> yearlies;
        public double averageWithdrawls;
        
        public Percentiles(List<Yearly> yearlies)
        {
            this.yearlies = yearlies;
        }
    }
}
