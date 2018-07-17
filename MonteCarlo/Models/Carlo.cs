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
        private static Mutex mutex = new Mutex();
        public List<List<double>> distribution = new List<List<double>> { };
        private double currentValue { get; set; }
        private double expectedReturn { get; set; }
        private double standardDeviation { get; set; }
        private double time { get; set; } //how many days,months, or years
        private const int trials = 10000; //how many trials
        private Ziggurat ziggurat;


        public Carlo(double currentValue, double expectedReturn, double standardDeviation, double time, Ziggurat ziggurat)
        {

            this.currentValue = currentValue;
            this.expectedReturn = expectedReturn;
            this.standardDeviation = standardDeviation;
            this.time = time;
            this.ziggurat = ziggurat;

            var iops = new ParallelOptions() { MaxDegreeOfParallelism = Environment.ProcessorCount }; //if this server were to run other things this could be turned down
            Parallel.For(0, trials, iops, element =>
            {
                RunTrials();
            });
        }

        private void RunTrials()
        {
            double change;
            double trialValue = currentValue;
            List<double> trial = new List<double> { }; //record the current trial

            for (int j = 0; j < time; j++)
            {
                change = trialValue * ((expectedReturn) + (standardDeviation * (ziggurat.GetRandom())));
                trialValue += change;
                trial.Add(trialValue);
            }
            //trial = trial.Select(x => Math.Round(x, 2)).ToList();

            mutex.WaitOne();
            distribution.Add(trial); //make sure only one thread accesses the list at any given time to record its trial
            mutex.ReleaseMutex();
        }
    }
}