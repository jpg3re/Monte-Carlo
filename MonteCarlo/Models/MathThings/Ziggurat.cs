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
        public List<double> x = new List<double>(256);
        public List<double> y = new List<double>(256);
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

                    break;
            }
            this.mean = mean;
            this.std = std;
        }

        public void GenerateZigTable()
        {
            x[0] = 3.5; //guess
            double area;

            do
            {
                t = Integration.Integrate(pFunc, x[0], (5 * std), iterations);
                y[0] = pFunc(x[0]);
                area = x[0] * y[0] + t;
                for (int i = 0; i < numberOfBlocks-2; i++)
                {
                    y[i + 1] = y[i] + (area/x[i]);
                   // x[i + 1] = RootFinder.FindRoot(pFunc,x[i],y[i+1]);
                }
            } while (Math.Abs(y[numberOfBlocks-1] - pFunc(0)) < 0.00001); //ehhh close enough
        }

        public void FindArea()
        {
            for(int i = 0; i < numberOfBlocks; i++)
            {

            }
        }
    }
}
