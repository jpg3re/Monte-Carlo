import { Chart } from "chart.js";
import { collapse } from "../collapse/collapse"
import { bindable } from "aurelia-framework";
import { inject } from 'aurelia-framework';

export class Graph {

  table: collapse;
  @bindable title;
  @bindable number;
  @bindable percentile = 10;
  @bindable currentPercentile = 10;
  @bindable averageWithdrawal;
  withdrawalData;
  @bindable probOfSucces;
  currentTableData;
  myChart;
  distribution;

  populateGraph() {
    var labels = [];
    var year = (new Date()).getFullYear();
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
    var year = (new Date()).getFullYear();
    for (var i = 0; i < amount.length; i++) {
      newTableData[i] =
        {
          'year': +year + +i,
          'amount': amount[i],
          'withdrawal': withdrawal[i],
          'growth': (growth[i] * 100).toFixed(2) + "%"
        }
    }
    this.currentTableData = newTableData;
  }
  displayData(percentile) {
    this.currentPercentile = Math.floor((+percentile) / +10) * +10;
    this.selectPercentileData(Math.floor((+percentile - +1) / +10));
    this.table.updateData(this.currentTableData);
    this.averageWithdrawal = this.withdrawalData[(Math.floor((+percentile - +1) / +10))];
  }

  createChart(inLabels, inData, title) {
    var tempData = [];
    for (var i = 0; i < inData.length; i++) {
      var color;
      var label;
      var hidden = true;
      if (i == 0) {
        color = "#4147BF"

      }
      if (i == 1) {
        color = "#419BBF"
      }
      if (i == 2) {
        color = "#F2E205"
      }
      if (i == 3) {
        color = "#F2CB05"
      }
      if (i == 4) {
        color = "#D90404"
      }
      if (i == 5) {
        color = "#222222"
      }
      if (i == 6) {
        color = "#2A3890"
      }
      if (i == 7) {
        color = "#089AD8"
      }
      if (i == 8) {
        color = "#670200"
      }
      label = (i + 1) + "0";
      if (i == 0 || i == 4 || i == 8) {
        hidden = false
      }
      tempData.push({
        fill: false,
        label: label,
        borderColor: color,
        hidden: hidden,
        data: inData[i]
      })
    }
    var data = {
      labels: inLabels,
      datasets: tempData
    }
    var options = {
      responsive: false,
      elements:{
      line: {
        tension: 0
      }
      },
      legend: { display: true },
      title: {
        display: true,
        text: title
      }
    }

    if (this.myChart) {
      this.myChart.destroy();
    }
    const element: any = document.getElementById("myChart" + this.number);
    this.myChart = new Chart(element.getContext('2d'), {
      type: 'line',
      data: data,
      options: options
    });
  }

  inputData(distribution, prob, withdrawal) {
    this.currentTableData = distribution[0].amount;
    this.distribution = distribution;
    this.withdrawalData = withdrawal;
    this.probOfSucces = prob;
    this.averageWithdrawal = withdrawal[0];
    this.populateGraph();
  }
}
