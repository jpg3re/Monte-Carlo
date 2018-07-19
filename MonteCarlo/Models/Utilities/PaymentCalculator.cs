using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.Utilities
{
    public class PaymentCalculator
    {

        public static double GetPayments(double initialAmount, double rate, int periods)
        {
            var paymentAmount = (rate * initialAmount) / (1 - Math.Pow(1 + rate, periods * -1));

            return paymentAmount;
        }
    }
}
