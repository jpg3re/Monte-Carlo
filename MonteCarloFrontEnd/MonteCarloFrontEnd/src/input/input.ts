import Model from "./model/model";
import Asset from "./asset/asset"
import { Chart } from "chart.js"

export default class Input {

  model = new Model();
  asset = new Asset();

  selected = 0;
  assetTab = 0;

  iterator = 0;
  assetIterator = 0;

  firstAssetName = "Asset 1";
  secondAssetName = "Asset 2";
  thirdAssetName = "Asset 3";


  nameHold;
  erHold;
  vHold;
  pwHold;

  myPieChart;
  
  attached() {
    this.InitialChart();
  }

  InitialChart() {
    this.myPieChart = new Chart(document.getElementById("pie-chart"), {
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
        labels: ["Remaining","Large Cap", "Small Cap", "US Treasury Bonds", "Corporate Bonds"],
        datasets: [{
          label: "Types",
          backgroundColor: ['#222222','#FFC300', '#FF5733', '#C70039', '#900C3F'],
          data: [data[0], data[1], data[2], data[3], data[4]]
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
              return data.labels[tooltipItems.index] + ': ' + dataset.data[tooltipItems.index] + '%';
          }
          }
      }
      }
  });
  }

  SwitchSelected(number) {
    this.UpdatePercentages();

    var tab;
    var text;

    var i = 0;
    while (document.getElementById("tab" + i) != null) {
      if (i != number) {
        tab = document.getElementById("tab" + i);
        text = document.getElementById("text" + i);

        tab.style.backgroundColor = "white";
        text.style.color = "#222222";
      }
      i++;
    }

    tab = document.getElementById("tab" + number);
    text = document.getElementById("text" + number);

    if (tab != null) {
      tab.style.backgroundColor = "rgb(86, 150, 87)";
      text.style.color = "white";
    }

    if (number < 6) {
      this.UpdateAsset(this.selected);

      this.selected = number;

      this.UnpackAsset(this.selected);
    }

    this.UpdatePercentages();

  }

  NewAsset() {
    if (this.assetTab == 0) {
      this.firstAssetName = this.nameHold;
    }
    else if (this.assetTab == 1) {
      this.secondAssetName = this.nameHold;
    } 
    else if (this.assetTab == 2) {
      this.thirdAssetName = this.nameHold;
    }

    this.iterator++;

    var tab = document.getElementById("assetTab" + this.iterator)
    tab.style.display = "block";

    this.ChangeAsset(this.iterator);
    this.assetTab = this.iterator;

    this.nameHold = ""
    this.erHold = "";
    this.vHold = "";
    this.pwHold = "";
  }

  ChangeAsset(number) {
    this.PushAsset(this.assetTab);
    this.SetAsset(number);

    var tab;
    var text;

    var i = 0;
    while (document.getElementById("assetTab" + i) != null) {
      if (i != number) {
        tab = document.getElementById("assetTab" + i);
        text = document.getElementById("assetText" + i);

        tab.style.backgroundColor = "white";
        text.style.color = "#222222";
      }
      i++;
    }

    tab = document.getElementById("assetTab" + number);
    text = document.getElementById("assetText" + number);


    tab.style.backgroundColor = "rgb(86, 150, 87)";
    text.style.color = "white";
    this.assetTab = number;
  }

  UpdatePercentages() {
    var pwLC = this.asset.largeCap.portfolioWeight;
    var pwSC = this.asset.smallCap.portfolioWeight; 
    var pwUST = this.asset.usTreasury.portfolioWeight; 
    var pwCB = this.asset.corporations.portfolioWeight;
    
    var other = 100 - pwLC - pwSC - pwUST - pwCB

    var data = [other,pwLC,pwSC,pwUST,pwCB]
    this.PieChart(data)
  }

  PushAsset(number) {
    this.asset.name = this.nameHold;
    this.model.assetHolder[number] = this.asset;
  }

  SetAsset(number) {
    if(this.model.assetHolder[number] != undefined) {
      this.SwitchSelected(0)
      this.asset = this.model.assetHolder[number];
      this.nameHold = this.asset.name;
      this.erHold = this.asset.largeCap.expectedReturn;
      this.vHold = this.asset.largeCap.volatility;
      this.pwHold = this.asset.largeCap.portfolioWeight;
    }
    else {
      this.SwitchSelected(0)
      this.asset = new Asset();
    }
  }

  UpdateAsset(selected) {
    if (selected == 0) {
      this.asset.largeCap.expectedReturn = this.erHold;
      this.asset.largeCap.volatility = this.vHold;
      this.asset.largeCap.portfolioWeight = this.pwHold;
    }
    else if (selected == 1) {
      this.asset.smallCap.expectedReturn = this.erHold;
      this.asset.smallCap.volatility = this.vHold;
      this.asset.smallCap.portfolioWeight = this.pwHold;
    }
    else if (selected == 2) {
      this.asset.usTreasury.expectedReturn = this.erHold;
      this.asset.usTreasury.volatility = this.vHold;
      this.asset.usTreasury.portfolioWeight = this.pwHold;
    }
    else {
      this.asset.corporations.expectedReturn = this.erHold;
      this.asset.corporations.volatility = this.vHold;
      this.asset.corporations.portfolioWeight = this.pwHold;
    }
  }

  UnpackAsset(selected) {
    if (selected == 0) {
      this.erHold = this.asset.largeCap.expectedReturn;
      this.vHold = this.asset.largeCap.volatility;
      this.pwHold = this.asset.largeCap.portfolioWeight;
    }
    else if (selected == 1) {
      this.erHold = this.asset.smallCap.expectedReturn;
      this.vHold = this.asset.smallCap.volatility;
      this.pwHold = this.asset.smallCap.portfolioWeight;
    }
    else if (selected == 2) {
      this.erHold = this.asset.usTreasury.expectedReturn;
      this.vHold = this.asset.usTreasury.volatility;
      this.pwHold = this.asset.usTreasury.portfolioWeight;
    }
    else {
      this.erHold = this.asset.corporations.expectedReturn;
      this.vHold = this.asset.corporations.volatility;
      this.pwHold = this.asset.corporations.portfolioWeight;
    }
  }
}
