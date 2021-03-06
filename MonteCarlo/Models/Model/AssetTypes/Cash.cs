﻿using System;
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

        public Cash(Upper upper, Mid mid, Lower lower)
        {
            this.lower = lower;
            this.mid = mid;
            this.upper = upper;
        }

        public Cash()
        {
            lower = new Lower(0, 0, 0);
            mid = new Mid(0, 0, 0);
            upper = new Upper(0, 0, 0);
        }
    }
}
