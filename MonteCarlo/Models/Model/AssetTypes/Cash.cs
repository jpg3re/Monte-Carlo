using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.Model
{
    public class Cash
    {
        public Lower lower { get; set; }
        public Mid mid { get; set; }
        public Upper upper { get; set; }
    }
}
