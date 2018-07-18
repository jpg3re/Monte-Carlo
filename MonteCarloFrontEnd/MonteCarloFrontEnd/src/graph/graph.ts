import { Chart } from "chart.js";
import { collapse } from "../collapse/collapse"
import { bindable } from "aurelia-framework";
import { inject } from 'aurelia-framework';


export class Graph {

  table: collapse;
  @bindable title;
  @bindable number;
  @bindable percentile;
  @bindable currentPercentile=10;
  currentTableData;

  distribution = [
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
  ];

  attached() {
    var labels = [];
    for (var i = 0; i < this.distribution[0].amount.length; i++) {
      labels.push(+2018 + +i);
    }
    var data0 = [];
    for (var i = 0; i < 9; i++) {
      data0.push(this.distribution[i].amount);
    }

    var data1 = [];
    for (var i = 0; i < 9; i++) {
      data1.push(this.distribution[i].amount);
    }
    var data2 = [];
    for (var i = 0; i < 9; i++) {
      data2.push(this.distribution[i].amount);
    }
    var data3 = [];
    for (var i = 0; i < 9; i++) {
      data3.push(this.distribution[i].amount);
    }
    var data4 = [];
    for (var i = 0; i < 9; i++) {
      data4.push(this.distribution[i].amount);
    }
    var data5 = [];
    for (var i = 0; i < 9; i++) {
      data5.push(this.distribution[i].amount);
    }

    if (this.number == 0) {
      this.createChart(labels, data0, this.title);
    }
    if (this.number == 1) {
      this.createChart(labels, data1, this.title);
    }
    if (this.number == 2) {
      this.createChart(labels, data2, this.title);
    }
    if (this.number == 3) {
      this.createChart(labels, data3, this.title);
    }
    if (this.number == 4) {
      this.createChart(labels, data4, this.title);
    }
    if (this.number == 5) {
      this.createChart(labels, data5, this.title);
    }
    

    this.displayData(this.currentPercentile);
  }

  selectPercentileData(percentile) {
    this.constructTableData(this.distribution[percentile].amount, this.distribution[percentile].withdrawal, this.distribution[percentile].growth);
  }

  constructTableData(amount, withdrawal, growth) {
    var newTableData = [];
    for (var i = 0; i < amount.length; i++) {
      newTableData[i] =
        {
          'year': +2018 + +i,
          'amount': amount[i],
          'withdrawal': withdrawal[i],
          'growth': growth[i]
        }
    }
    this.currentTableData = newTableData;

  }
  displayData(percentile) {
    console.log(percentile);
    this.currentPercentile=percentile;
    console.log(Math.floor(Math.floor((+percentile - +1) / +10)));
    this.selectPercentileData(Math.floor((+percentile - +1) / +10));
    this.table.updateData(this.currentTableData);
  }

  createChart(inLabels, inData, title) {
    var tempData = [];
    for (var i = 0; i < inData.length; i++) {
      tempData.push({
        fill: false,
        borderColor: "red",
        data: inData[i]
      })
    }


    var data = {
      labels: inLabels,
      datasets: tempData
    }



    var options = {
      responsive: false,
      legend: { display: false },
      title: {
        display: true,
        text: title
      }
    }
    var myChart = new Chart(document.getElementById("myChart" + this.number), {
      type: 'line',
      data: data,
      options: options
    });
  }
}
