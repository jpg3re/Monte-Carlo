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
            y = (1 / (Math.Sqrt(2 * Math.PI * variance))) * (Math.Exp(-1 * ((Math.Pow((x - mean),2)) / (2 * variance))));
            return y;
        }
    }
    public delegate double ProbabilityFunction(double x);

    public enum PDFType
    {
        Normal
    }
}
