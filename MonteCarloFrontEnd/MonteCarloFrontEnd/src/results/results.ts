import { Asset } from "./asset/asset"
import { Chart } from "chart.js"
export default class Results {
  tab0: Asset;
  numTabs;
  Data = [[
    [
      {
        amount: [900, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ],
    [
      {
        amount: [1000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ],
    [
      {
        amount: [2000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ],
    [
      {
        amount: [3000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ],
    [
      {
        amount: [4000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ],
    [
      {
        amount: [5000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ]
  ],
  [
    [
      {
        amount: [100, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ],
    [
      {
        amount: [1000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ],
    [
      {
        amount: [2000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ],
    [
      {
        amount: [3000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ],
    [
      {
        amount: [4000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ],
    [
      {
        amount: [5000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ]
  ],
  [
    [
      {
        amount: [8000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ],
    [
      {
        amount: [1000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ],
    [
      {
        amount: [2000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ],
    [
      {
        amount: [3000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ],
    [
      {
        amount: [4000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ],
    [
      {
        amount: [5000, 1, 2, 3, 4, 5, 6],
        withdrawal: [0, 2, 3, 2, 3, 2, 3],
        growth: [0, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [7, 8, 9, 10, 11, 12, 13],
        withdrawal: [1, 2, 3, 2, 3, 2, 3],
        growth: [1, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [14, 15, 16, 17, 18, 19, 20],
        withdrawal: [2, 2, 3, 2, 3, 2, 3],
        growth: [2, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [21, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [28, 29, 30, 31, 32, 33, 34],
        withdrawal: [4, 2, 3, 2, 3, 2, 3],
        growth: [4, 2, 0, 0, 2, 1, 8],
      },
      {
        amount: [30, 220, 239, 247, 251, 262, 272],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [31, 222, 123, 204, 825, 226, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [32, 100, 200, 214, 325, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      },
      {
        amount: [33, 22, 23, 24, 25, 26, 27],
        withdrawal: [3, 2, 3, 2, 3, 2, 3],
        growth: [3, 2, 0, 0, 2, 1, 8]
      }
    ]
  ]];

  attached() {
    var results = JSON.parse(localStorage.getItem('results'));
    console.log("hi");
     console.log(results);
     console.log("uiygiugiu");
     this.formatData(results);
    this.numTabs = this.Data.length;
    if (this.numTabs == 1) {
      var tab1 = document.getElementById("asset1");
      var tab2 = document.getElementById("asset2");
      tab1.style.display = "none";
      tab2.style.display = "none";
    }
    else if (this.numTabs == 2) {
      var tab2 = document.getElementById("asset2");
      tab2.style.display = "none";
    }
    this.tab0.populateAsset(this.Data[0]);
  }
  formatData(data) {
    var Data = [];

    for (var x = 0; x < data.length; x++){
      var tempPercentiles = [];
    for (var i = 0; i < 9; i++) {
      var tempAmount = [];
      var tempWithdrawal = [];
      var tempGrowth = [];
      for (var j = 0; j < data[0][0].yearly.length; j++) {
        tempAmount[j] = data[i][j].yearly.amount;
        tempWithdrawal = data[i][j].yearly.withdrawal;
        tempGrowth = data[i][j].yearly.growth;
      }
      tempPercentiles[i] = {
        'amount': tempAmount,
        'withdrawal': tempWithdrawal,
        'growth': tempGrowth
      }
    }
    Data[x] = tempPercentiles;
    }
  this.Data=Data;
  }




  switchTab(tab) {
    var tabs = document.getElementsByClassName("tabThings");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('is-active');
    }
    var number = document.getElementById("asset" + tab);
    if (tab == 0) {
      this.tab0.populateAsset(this.Data[0]);
    }
    if (tab == 1) {
      this.tab0.populateAsset(this.Data[1]);

    }
    if (tab == 2) {
      this.tab0.populateAsset(this.Data[2]);

    }
    number.classList.add('is-active');

    var dataTabs = document.getElementsByClassName("tabInfo");

  }
}


