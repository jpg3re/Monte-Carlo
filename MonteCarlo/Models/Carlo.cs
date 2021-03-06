﻿using MonteCarlo.Models.MathThings;
using MonteCarlo.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MonteCarlo.Models
{
    public class Carlo
    {
        //private static Mutex mutex = new Mutex();
        private static Mutex rateMutex = new Mutex();
        private double expectedReturn { get; set; }
        private double standardDeviation { get; set; }
        private int time { get; set; } //how many days,months, or years
        public const int trials = 5000; //how many trials
        public List<List<double>> rates = new List<List<double>>(trials);
        private Ziggurat ziggurat;


        public Carlo(double expectedReturn, double standardDeviation, int time, Ziggurat ziggurat)
        {
            this.expectedReturn = expectedReturn;
            this.standardDeviation = standardDeviation;
            this.time = time;
            this.ziggurat = ziggurat;

            //var iops = new ParallelOptions() { MaxDegreeOfParallelism = Environment.ProcessorCount }; //if this server were to run other things this could be turned down
            Parallel.For(0, trials, element =>
            {
                GetRates();
            });
        }

        private void GetRates()
        {
            List<double> rate = new List<double>(time);
            for (int i = 0; i < time; i++)
            {
                rate.Add(expectedReturn + (standardDeviation * (ziggurat.GetRandom())));
            }
            rateMutex.WaitOne();
            rates.Add(rate);
            rateMutex.ReleaseMutex();
        }
    }
}
