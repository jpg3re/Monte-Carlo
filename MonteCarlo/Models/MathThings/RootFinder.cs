using MonteCarlo.Models.MathThings.PDFs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.MathThings
{
    public static class RootFinder
    {
        public static int iterations { get; set; } = 100000;
        public static double tolerance { get; set; } = 0.00001;

        //steffensen's method
        public static double FindRoot(ProbabilityFunction func, double xGuess)
        {
            double[] xvals = new double[iterations];
            double funcResult1;
            double funcResult2;
            double deltaSquare;
            xvals[0] = xGuess;

            for (int i = 0; i < iterations - 1; i++)
            {
                funcResult1 = func(xvals[i]);
                funcResult2 = func(funcResult1);
                deltaSquare = xvals[i] - (Math.Pow((funcResult2 - xvals[i]), 2) / (funcResult2 - (2 * funcResult1) + xvals[i])); //aitkens delta square method


                if (Math.Abs(deltaSquare - xvals[i]) < tolerance) //close enough
                {
                    return deltaSquare;
                }
                xvals[i + 1] = deltaSquare;
                //xvals[i + 1] = xvals[i] - (funcResult / (((func(xvals[i] + funcResult) - funcResult) / (funcResult))));
            }
            return xvals[iterations - 1];
        }

        //my guess method
        public static double FindGuess(ProbabilityFunction func, double guess, double sanity)
        {
            double increment = .1;
            double current;
            double update;
            bool changeInc = false;
            bool increased = false;

            for (int i = 0; i < iterations; i++)
            {
                current = func(guess);
                if (changeInc)
                {
                    increment = increment / 10;
                    changeInc = false;
                }
                if (Math.Abs(current - sanity) < tolerance)
                {
                    return guess;
                }
                if (current > sanity)
                {
                    guess += increment;
                    increased = true;
                }
                else if (current < sanity)
                {
                    guess -= increment;
                    increased = false;
                }
                update = func(guess);
                if ((Math.Abs(current - sanity) < Math.Abs(update - sanity)))
                {
                    if (increased)
                    {
                        guess -= increment;
                        changeInc = true;
                    }
                    else
                    {
                        guess += increment;
                        changeInc = true;
                    }
                }
            }
            return guess;
        }

        //brent's method
        public static double Root(ProbabilityFunction func, double lowerBound, double upperBound)
        {
            double a = lowerBound;
            double b = upperBound;
            double c;
            double fa = func(a);
            double fb = func(b);
            double fc;
            double fs = 0;
            double s = 0;
            double d = 0;
            bool flag = true;

            if ((fa * fb) >= 0)
            {
                return 0;
            }
            if (Math.Abs(fa) < Math.Abs(fb)) //swap if the magnitude of lower is less then upper
            {
                var temp = a;
                a = b;
                b = temp;
                temp = fa;
                fa = fb;
                fb = temp;
            }
            fc = fa;
            c = a;

            for (int i = 0; i < iterations; i++)
            {
                if (Math.Abs(b - a) < tolerance)
                {
                    return s;
                }

                if (fa != fc && fb != fc) //inverse quadratic interpolation
                {
                    s = (a * fb * fc / ((fa - fb) * (fa - fc))) + (b * fa * fc / ((fb - fa) * (fb - fc))) + (c * fa * fb / ((fc - fa) * (fc - fb)));
                }
                else //secant
                {
                    s = b - fb * (b - a) / (fb - fa);
                }
                //bijection
                if (((s < (3 * a + b) * 0.25) || (s > b)) ||
                    (flag && (Math.Abs(s - b) >= (Math.Abs(b - c) / 2))) ||
                    (flag == false && (Math.Abs(s - b) >= (Math.Abs(c - d) / 2))) ||
                    (flag && (Math.Abs(b - c) < tolerance)) ||
                    (flag == false && (Math.Abs(c - d) < tolerance)))
                {
                    s = (a + b) / 2;
                    flag = true;
                }
                else
                {
                    flag = false;
                }

                fs = func(s);
                d = c;
                c = b;
                fc = fb;

                if (fa * fs < 0)
                {
                    b = s;
                    fb = fs;
                }
                else
                {
                    a = s;
                    fa = fs;
                }

                if (Math.Abs(fa) < Math.Abs(fb))
                {
                    var temp = a;
                    a = b;
                    b = temp;
                    temp = fa;
                    fa = fb;
                    fb = temp;
                }
            }

            return 0;
        }
    }
}
