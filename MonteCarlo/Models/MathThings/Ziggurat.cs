using MonteCarlo.Models.MathThings;
using MonteCarlo.Models.MathThings.PDFs;
using MonteCarlo.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.MathThings
{
    public class Ziggurat
    {
        private const int numberOfBlocks = 256;
        private double[] x = new double[256];
        private double[] y = new double[256];
        private double t; //tail area
        private ProbabilityFunction pFunc;
        private PDF pdf;
        private int iterations = 10000;
        private double lowerBound;
        private double upperBound;
        private double guess;
        private double tailBound;

        public Ziggurat(PDFType pdfType)
        {
            pdf = new PDF(0, 1);

            switch (pdfType)
            {
                case PDFType.Normal:
                    pFunc = pdf.NormalPDF;
                    lowerBound = 0;
                    upperBound = 0x100000000;
                    guess = 3.56;
                    tailBound = 6;
                    break;
                case PDFType.Laplace:
                    pFunc = pdf.LaplacePDF;
                    lowerBound = 0;
                    upperBound = 5000;
                    guess = 10;
                    tailBound = 15;
                    break;
                case PDFType.T:
                    pFunc = pdf.TPDF;
                    lowerBound = 0;
                    upperBound = Int16.MaxValue;
                    guess = 4;
                    tailBound = 6;
                    break;
            }
            GenerateZigTable();
        }

        public void GenerateZigTable()
        {
            double area;
            double sanityCheck = pFunc(0);

            RootFinder.FindGuess(guess =>
            {
                x[0] = guess;
                t = Integration.Integrate(pFunc, x[0], tailBound, iterations);
                y[0] = pFunc(x[0]);
                area = x[0] * y[0] + t;
                for (int i = 0; i < numberOfBlocks - 1; i++)
                {
                    y[i + 1] = y[i] + (area / x[i]);
                    x[i + 1] = RootFinder.Root(x => { return (pFunc(x) - y[i + 1]); }, lowerBound, upperBound);
                }
                return (y[numberOfBlocks - 1]);
            }, guess, sanityCheck);

        }

        public double GetRandom()
        {
            int block = SafeRandom.NextInt(0, numberOfBlocks - 1);
            if (block == 0)
            {
                return TailFallback();
            }
            double xRand = SafeRandom.NextDouble();
            double yRand = SafeRandom.NextDouble();
            int flip = SafeRandom.NextInt(0, 2);

            double xVal = xRand * x[block];

            if (xVal < x[block + 1])
            {
                if (flip == 1)
                {
                    xVal = -xVal;
                }
                return xVal;
            }

            double yVal = y[block] + (yRand * (y[block + 1] - y[block]));

            if (yVal < pFunc(xVal))
            {
                if (flip == 1)
                {
                    xVal = -xVal;
                }
                return xVal;
            }
            return GetRandom();
        }

        public double TailFallback()
        {
            double xRand = SafeRandom.NextDouble();
            double yRand = SafeRandom.NextDouble();

            double xVal = -Math.Log(xRand) / x[0];
            double yVal = -Math.Log(yRand);
            int flip = SafeRandom.NextInt(0, 2);

            if ((2 * yVal) > Math.Pow(xVal, 2))
            {
                if (flip == 1)
                {
                    xVal = -xVal - x[0];
                }
                else
                {
                    xVal += x[0];
                }
                return xVal;
            }
            return TailFallback();
        }
    }
}
