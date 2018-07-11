import { Chart } from 'chart.js';

export default class PieChart {
  myPieChart;
  
  InitialChart(v) {
    this.myPieChart = new Chart(v.getElementById("pie-chart"), {
      type: 'bar',
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    });
  }


  PieChart(data) {
    this.myPieChart.destroy();
    this.myPieChart = new Chart(document.getElementById("pie-chart"), {
      type: 'doughnut',
      data: {
        labels: ["Large Cap", "Small Cap", "US Treasury Bonds", "Corporate Bonds"],
        datasets: [{
          label: "Types",
          backgroundColor: ['#FFC300', '#FF5733', '#C70039', '#900C3F'],
          data: [data[0], data[1], data[2], data[3]]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Percent Breakdown',
          fontSize:35,
          fontFamily: "Lato",
          fontColor: "#222222",
          fontWeight:100,
        },
        labels: {
          fontSize:16,
          fontFamily: "Lato",
          fontColor: "#222222",
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItems, data) { 
              var dataset = data.datasets[tooltipItems.datasetIndex];
              return data.labels[tooltipItems.index] + ': ' + dataset.data[tooltipItems.index + '%'];
          }
          }
      }
      }
  });
  }
}
