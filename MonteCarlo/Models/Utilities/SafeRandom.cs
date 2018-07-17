using System;

namespace MonteCarlo.Utilities
{
    public static class SafeRandom
    {
        [ThreadStatic]
        private static Random _local;

        public static double NextDouble(double minValue, double maxValue)
        {
            Random inst = _local;
            if (inst == null)
            {
                _local = inst = new Random();
            }
            double next = inst.NextDouble();
            while (next == 0) // I need between (0,1) not [0,1)
            {
                next = inst.NextDouble();
            }
            var r = next * (maxValue - minValue);
            return minValue + r;
        }

        public static double NextDouble()
        {
            Random inst = _local;
            if (inst == null)
            {
                _local = inst = new Random();
            }
            return _local.NextDouble();
        }

        public static int NextInt(int minValue, int maxValue)
        {
            Random inst = _local;
            if (inst == null)
            {
                _local = inst = new Random();
            }
            return inst.Next(minValue, maxValue);
        }

        public static int NextInt()
        {
            Random inst = _local;
            if (inst == null)
            {
                _local = inst = new Random();
            }
            return inst.Next();
        }
    }
}
