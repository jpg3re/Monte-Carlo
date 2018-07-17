import { Chart } from "chart.js";
import { collapse } from "../collapse/collapse"
import { bindable } from "aurelia-framework";
import { inject } from 'aurelia-framework';


export class Graph {

  foo: collapse;

 


  attached() {
    var labels = [1, 2, 3, 4, 5];
    var data0 = [[2, 3, 4, 5, 6], [1, 2, 7, 1, 5], [2, 1, 4, 8, 2], [7, 1, 0, 3, 2]];
    var data1 = [[2, 3, 4, 5, 6], [1, 2, 7, 1, 5]];
    var data2 = [[1, 2, 7, 1, 5], [2, 1, 4, 8, 2], [7, 1, 0, 3, 2]];
    var data3 = [[1, 2, 7, 1, 5], [2, 1, 4, 8, 2], [7, 1, 0, 3, 2]];
    var data4 = [[1, 2, 7, 1, 5], [2, 1, 4, 8, 2], [7, 1, 0, 3, 2]];
    var data5 = [[1, 2, 7, 1, 5], [2, 1, 4, 8, 2], [7, 1, 0, 3, 2]];



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
  }
  @bindable title;
  @bindable number;
  @bindable percentile;
  displayData() {
    var data = [
      {
        'year': 4111,
        'amount': 11111,
        'withdrawal': 1411,
        'growth': 2511
      },
      {
        'year': 4311,
        'amount': 5111,
        'withdrawal': 441,
        'growth': 115
      },
      {
        'year': 4412,
        'amount': 5111,
        'withdrawal': 4111,
        'growth': 5113
      }
    ];
    this.foo.updateData(data);

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
