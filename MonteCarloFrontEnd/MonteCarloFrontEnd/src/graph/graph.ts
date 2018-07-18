import { Chart } from "chart.js";
import { collapse } from "../collapse/collapse"
import { bindable } from "aurelia-framework";
import { inject } from 'aurelia-framework';


export class Graph {

  table: collapse;
  @bindable title;
  @bindable number;
  @bindable percentile;
  @bindable currentPercentile = 10;
  currentTableData;

  distribution = [
    {
      amount: [600, 1, 2, 3, 4, 5, 6],
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
    var data = [];
    for (var i = 0; i < 9; i++) {
      data.push(this.distribution[i].amount);
    }
    this.createChart(labels, data, this.title);
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
    this.currentPercentile = percentile;
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

  inputData(distribution) {
    this.distribution = distribution;
  }
}
