using MonteCarlo.Models.MathThings.PDFs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.MathThings
{
    public static class RootFinder
    {
        public static double iterations { get; set; } = 10000;

        //steffensen's method
        public static double FindRoot(ProbabilityFunction func, double x)
        {
            for(int i = 0; i < iterations; i++)
            {

            }
            return 0;
        }
    }
}
