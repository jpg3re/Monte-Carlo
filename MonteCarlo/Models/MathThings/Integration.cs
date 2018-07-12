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
            double s = f(lower) + f(upper);

            for(int i = 1; i < intervals; i += 2)
            {
                s += 4 * f(lower + i * h);
            }
            for (int i = 2; i < intervals-1; i += 2)
            {
                s += 2 * f(lower + i * h);
            }

            return (s * h) / 3;
        }
    }
}
