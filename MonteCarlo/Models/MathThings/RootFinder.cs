using MonteCarlo.Models.MathThings.PDFs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.MathThings
{
    public static class RootFinder
    {
        public static int iterations { get; set; } = 100;

        //steffensen's method
        public static double FindRoot(ProbabilityFunction func, double xGuess)
        {
            double[] xvals = new double[iterations];
            double funcResult;
            xvals[0] = xGuess;

            for (int i = 0; i < iterations - 1; i++)
            {
                if (Math.Abs(func(xvals[i])) < 0.0000001) //close enough
                {
                    xvals[iterations - 1] = xvals[i];
                    break;
                }

                funcResult = func(xvals[i]);
                xvals[i + 1] = xvals[i] - (funcResult / (((func(xvals[i] + funcResult)) / (funcResult)) - 1));
            }
            return xvals[iterations-1];
        }
    }
}
