import { Chart } from "chart.js"
import { Graph } from "../graph/graph"
export class Asset {

  graph0: Graph;
  graph1: Graph;
  graph2: Graph;
  graph3: Graph;
  graph4: Graph;
  graph5: Graph;

  asset = [
    [
      {
        amount: [0, 1, 2, 3, 4, 5, 6],
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
  ];
 
  attached() {
    this.graph0.inputData(this.asset[0]);
    this.graph1.inputData(this.asset[1]);
    this.graph2.inputData(this.asset[2]);
    this.graph3.inputData(this.asset[3]);
    this.graph4.inputData(this.asset[4]);
    this.graph5.inputData(this.asset[5]);
  }
}
