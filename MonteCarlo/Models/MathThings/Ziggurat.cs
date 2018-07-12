using MonteCarlo.Models.MathThings;
using MonteCarlo.Models.MathThings.PDFs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.MathThings
{
    public class Ziggurat
    {
        public int numberOfBlocks = 256;
        public double[] x = new double[256];
        public double[] y = new double[256];
        public double area;
        public double mean;
        public double std;
        public double t; //tail area
        public ProbabilityFunction pFunc;
        public PDF pdf;
        private int iterations = 10000;

        public Ziggurat(PDFType pdfType, double mean, double std)
        {
            pdf = new PDF(mean, std);

            switch (pdfType)
            {
                case PDFType.Normal:
                    pFunc = pdf.NormalPDF;
                    break;
            }
            this.mean = mean;
            this.std = std;
            GenerateZigTable();
        }

        public void GenerateZigTable()
        {
            Console.WriteLine(RootFinder.FindRoot(guess =>
            {
                double area;
                double sanityCheck;
                x[0] = guess; //guess

                sanityCheck = pFunc(0);
                t = Integration.Integrate(pFunc, x[0], (5 * std), iterations);
                y[0] = pFunc(x[0]);
                area = x[0] * y[0] + t;
                for (int i = 0; i < numberOfBlocks - 1; i++)
                {
                    y[i + 1] = y[i] + (area / x[i]);
                    x[i + 1] = RootFinder.FindRoot(x => pFunc(x) - y[i + 1], 3.5);
                }
                return (y[numberOfBlocks - 1] - sanityCheck);
            }, 3.5));
        }

        public void FindArea()
        {
            for (int i = 0; i < numberOfBlocks; i++)
            {

            }
        }
    }
}
