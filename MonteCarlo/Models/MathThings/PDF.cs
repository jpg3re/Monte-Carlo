using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.MathThings.PDFs
{
    public class PDF
    {
        private double mean { get; set; }
        private double std { get; set; }

        public PDF(double mean, double std)
        {
            this.mean = mean;
            this.std = std;
        }

        public double NormalPDF(double x)
        {
            double variance = Math.Pow(std, 2);
            double y;
            y = (1.0 / (Math.Sqrt(2.0 * Math.PI * variance))) * (Math.Exp(-1.0 * ((Math.Pow((x - mean), 2)) / (2.0 * variance))));
            return y;
        }

        public double LaplacePDF(double x)
        {
            double y;
            y = (1.0 / 2.0) * Math.Exp(-1 * x);
            return y;
        }

        public double TPDF(double x)
        {
            double y;
            //y = (1.0 / 2.0) + (Math.Atan(x) / Math.PI);
            //y = (1.0 / 2.0) + (x / (2 * Math.Sqrt(2 + Math.Pow(x, 2))));
            
            y = (1 / (Math.PI * 2)) * (4 / (Math.Pow(x, 2) + 4)); //cauchy
            return y;
        }

        private double Factorial(double x)
        {
            double result = 1;
            while (x != 1)
            {
                result = result * x;
                x = x - 1;
            }
            return result;
        }
    }
    public delegate double ProbabilityFunction(double x);

    public enum PDFType
    {
        Normal,
        Laplace,
        T
    }
}
