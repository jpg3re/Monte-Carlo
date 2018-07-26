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
  @bindable probOfSuccess;
  currentTableData;
  myChart;
  distribution;
  max;
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

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //thanks internet
  }
  constructTableData(amount, withdrawal, growth) {
    var newTableData = [];
    var year = (new Date()).getFullYear();
    for (var i = 0; i < amount.length; i++) {
      if (withdrawal[i] < 0) {
        withdrawal[i]=(withdrawal[i]*-1);
        newTableData[i] =
          {
            'year': +year + +i,
            'amount': "$" + this.numberWithCommas(amount[i]),
            'withdrawal': "-$" + this.numberWithCommas(withdrawal[i]),
            'growth': (growth[i] * 100).toFixed(2) + "%"
          }
      } else {
        newTableData[i] =
          {
            'year': +year + +i,
            'amount': "$" + this.numberWithCommas(amount[i]),
            'withdrawal': "$" + this.numberWithCommas(withdrawal[i]),
            'growth': (growth[i] * 100).toFixed(2) + "%"
          }
      }
    }
    this.currentTableData = newTableData;
  }
  displayData(percentile) {
    this.currentPercentile = Math.floor((+percentile) / +10) * +10;
    this.selectPercentileData(Math.floor((+percentile - +1) / +10));
    this.table.updateData(this.currentTableData);
    this.averageWithdrawal = "$" + this.numberWithCommas(this.withdrawalData[(Math.floor((+percentile - +1) / +10))]);
  }

  createChart(inLabels, inData, title) {
    var tempData = [];
    var self = this;
    for (var i = 0; i < inData.length; i++) {
      var color;
      var label;
      var hidden = true;
      if (i == 0) {
        color = "#000000"

      }
      if (i == 1) {
        color = "#001f33"
      }
      if (i == 2) {
        color = " #003d66"
      }
      if (i == 3) {
        color = "#005c99"
      }
      if (i == 4) {
        color = "#007acc"
      }
      if (i == 5) {
        color = "#0099ff"
      }
      if (i == 6) {
        color = "#33adff"
      }
      if (i == 7) {
        color = "#66c2ff"
      }
      if (i == 8) {
        color = "#99d6ff"
      }
      label = (i + 1) + "0";
      if (i == 0 || i == 4 || i == 8) {
        hidden = false
      }
      tempData.push({
        fill: false,
        label: label + "th",
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
      elements: {
        line: {
          tension: 0
        }
      },
      legend: { display: true },
      title: {
        fontSize: 25,
        display: true,
        text: title
      },
      scales: {
        yAxes: [{
          ticks: {
            max: (Math.ceil(this.max * 1.1 / 10000) * 10000),
            beginAtZero: true,
            callback: function (value, index, values) {
              return '$' + self.numberWithCommas(value);
            }
          }
        }]
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function (tooltipItem, data) {
            var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || 'Other';
            var label = self.numberWithCommas((data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]).toFixed(2).toString());
            return datasetLabel + ': $' + label;
          }
        }
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

  inputData(distribution, prob, withdrawal, max, title) {
    this.currentTableData = distribution[0].amount;
    this.distribution = distribution;
    this.withdrawalData = withdrawal;


    this.probOfSuccess = (+prob * 100).toFixed(2);
    var id = document.getElementById("prob" + this.number);
    console.log(this.probOfSuccess)
    if (this.probOfSuccess < 50) {
      id.style.color = "red";
    } else if (this.probOfSuccess < 80) {
      id.style.color = "#ffae42";
    } else {
      id.style.color = "green";
    }
    this.averageWithdrawal = withdrawal[0];
    this.max = max;
    this.title = [title, "Percentile:"];
    this.populateGraph();
  }
}
