using MonteCarlo.Models.MathThings.PDFs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.MathThings
{
    public static class Integration
    {
        public static double Integrate(ProbabilityFunction f, double lower, double upper, double intervals)
        {
            double h = (upper - lower) / intervals;
            double res = (f(lower) + f(upper)) / 2;
            for (int i = 1; i < intervals; i++)
            {
                res += f(lower + i * h);
            }
            return h * res;
        }
    }
}