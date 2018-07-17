import { Chart } from "chart.js";
import { bindable } from "aurelia-framework";
export class Graph {




  attached() {
    var labels = [1, 2, 3, 4, 5];
    var data0 = [[2, 3, 4, 5, 6],[1, 2, 7, 1, 5],[2, 1, 4, 8, 2],[7, 1, 0, 3, 2]];
    var data1=[[2, 3, 4, 5, 6],[1, 2, 7, 1, 5]];
     var data2 = [[1, 2, 7, 1, 5],[2, 1, 4, 8, 2],[7, 1, 0, 3, 2]];
    var title = "Sample title";
    
    if(this.number==0){
    this.createChart(labels, data0, title);
    }
  if(this.number==1){
    this.createChart(labels,data1,title);
  }
  if(this.number==2){
    this.createChart(labels,data2,title);
  }
  }
  @bindable number;
  createChart(inLabels, inData, title) {

    var tempData = [];
    for (var i = 0; i < inData.length; i++) {
      tempData.push({
        fill:false,
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
    var myChart = new Chart(document.getElementById("myChart"+this.number), {
      type: 'line',
      data: data,
      options: options
    });
  }
}
