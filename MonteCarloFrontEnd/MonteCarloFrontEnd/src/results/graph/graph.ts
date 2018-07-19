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

  distribution;

  populateGraph() {
    var labels = [];
    var year =(new Date()).getFullYear();
    for (var i = 0; i < this.distribution[0].amount.length; i++) {
      labels.push(+year + +i);
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
     var year =(new Date()).getFullYear();
    for (var i = 0; i < amount.length; i++) {
      newTableData[i] =
        {
          'year': +year + +i,
          'amount': amount[i],
          'withdrawal': withdrawal[i],
          'growth': growth[i]
        }
    }
    this.currentTableData = newTableData;
  }
  displayData(percentile) {
    this.currentPercentile = Math.floor((+percentile) / +10)* +10;
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
    this.populateGraph();
  }
}
