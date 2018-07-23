import Model from "./model/model";
import Asset from "./asset/asset"
import { Chart } from "chart.js"
import HTTPPost from "../httpPost/httpPost"

export default class Input {

  model = new Model();
  asset = new Asset();
  post = new HTTPPost();

  overSelected = 0;
  selected = 0;
  assetTab = 0;

  stockNames = ["Large Cap Equities" , "Medium Cap Equities" , "Small Cap Equities"];
  bondNames = ["Investment Grade" , "Noninvestment Grade" , "Treasuries"];
  cashNames = ["CD's" , "Money Market Account" , "Commercial Paper"];

  firstAssetName = "Asset 1";
  secondAssetName = "Asset 2";
  thirdAssetName = "Asset 3";

  iterator = 0;

  nameHold = null;
  erHold = null;
  vHold = null;
  pwHold = null;

  myPieChart;
  exists = 0;
  
  attached() {
    var url = document.referrer;
    if (url == "http://localhost:8089/home") {

     }
    else if (url == "http://localhost:8089/results") {
      this.model = JSON.parse(localStorage.getItem('model'));
      for (var e = this.model.numberOfAssets; e > 1; e--) {
        this.NewAsset();
        this.ChangeAsset(0);
      }
    }
    else {
      window.location.href = "home";
    }

    this.PieChart([100 , 0 , 0 , 0 , 0])
    this.ConstantRun()
  }

  UseDefaults() {
    this.asset.stocks.upper.expectedReturn = 5.333;
    this.asset.stocks.upper.volatility = 17.667;

    this.asset.stocks.mid.expectedReturn = 5.333;
    this.asset.stocks.mid.volatility = 17.667;

    this.asset.stocks.lower.expectedReturn = 5.333;
    this.asset.stocks.lower.volatility = 17.667;

    this.asset.bonds.upper.expectedReturn = 2.9;
    this.asset.bonds.upper.volatility = 4.95;

    this.asset.bonds.mid.expectedReturn = 4.15;
    this.asset.bonds.mid.volatility = 10.1;

    this.asset.bonds.lower.expectedReturn = 2.5;
    this.asset.bonds.lower.volatility = 4.95;

    this.asset.cash.upper.expectedReturn = 2.15;
    this.asset.cash.upper.volatility = 0.65;

    this.asset.cash.mid.expectedReturn = 2.15;
    this.asset.cash.mid.volatility = 0.65;

    this.asset.cash.lower.expectedReturn = 2.15;
    this.asset.cash.lower.volatility = 0.65;
  }

  ConstantRun(){
    var self = this;
    var element = document.getElementById("pw")
    element.onkeyup = function(event) {
      self.SaveSubAsset(self.selected);
      self.UpdatePercentages();
    };
  }

  PieChart(data) {
    if (this.exists == 1) {
      this.myPieChart.destroy();
    }
    this.myPieChart = new Chart(document.getElementById("pie-chart"), {
      type: 'pie',
      data: {
        labels: ["Remaining" , "Large Cap Equities" , "Medium Cap Equities" , "Small Cap Equities" , "Investment Grade" , "High Yield" , "Treasuries" , "CD's" , "Money Market Account" , "Commercial Paper"],
        datasets: [{
          label: "Types",
          backgroundColor: ['#222222','#CEEB81', '#618D05' , '#A3D444','#FFD536', '#FFE068' , '#FFEA98','#540032', '#820333' , '#C9283E'],
          data: [data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9]]
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
        legend : {
          display: false,
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
  this.exists = 1;
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

    if (this.iterator < 2) {
      var tab = document.getElementById("assetTab" + this.iterator)
      tab.style.display = "block";
  
      this.ChangeAsset(this.iterator);
      this.assetTab = this.iterator;
  
      this.nameHold = null;
      this.erHold = null;
      this.vHold = null;
      this.pwHold = null;
    }
    else if (this.iterator == 2) {
      var tab = document.getElementById("assetTab" + this.iterator)
      tab.style.display = "block";
  
      this.ChangeAsset(this.iterator);
      this.assetTab = this.iterator;
  
      this.nameHold = null;
      this.erHold = null;
      this.vHold = null;
      this.pwHold = null;
      document.getElementById("NewButton").style.display = "none"
    }
    else {
      this.ChangeAsset(this.iterator);
      this.SwitchSelected(10);
    }
  }

  ChangeAsset(number) {

    if (this.assetTab == 0) {
      this.firstAssetName = this.nameHold;
    }
    else if (this.assetTab == 1) {
      this.secondAssetName = this.nameHold;
    } 
    else if (this.assetTab == 2) {
      this.thirdAssetName = this.nameHold;
    }

    this.PushAsset(this.assetTab);
    this.SetAsset(number);
    this.UpdatePercentages();

    var tab;
    var text;

    var i = 0;
    while (document.getElementById("assetTab" + i) != null) {
      if (i != number) {
        tab = document.getElementById("assetTab" + i);
        text = document.getElementById("assetText" + i);

        tab.style.backgroundColor = "rgb(170, 201, 171)";
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

  PushAsset(number) {
    this.SwitchOverSelected(0);
    this.asset.name = this.nameHold;
    this.model.assetHolder[number] = this.asset;
  }

  SetAsset(number) {
    if(this.model.assetHolder[number] != undefined) {
      this.SwitchOverSelected(0)
      this.asset = this.model.assetHolder[number];
      this.UnpackHolders(0);
      this.nameHold = this.asset.name;
    }
    else {
      this.SwitchOverSelected(0)
      this.asset = new Asset();
    }
  }

  UpdatePercentages() {
    var suPW = this.asset.stocks.upper.portfolioWeight;
    var smPW = this.asset.stocks.mid.portfolioWeight;
    var slPW = this.asset.stocks.lower.portfolioWeight;

    var buPW = this.asset.bonds.upper.portfolioWeight;
    var bmPW = this.asset.bonds.mid.portfolioWeight;
    var blPW = this.asset.bonds.lower.portfolioWeight;

    var cuPW = this.asset.cash.upper.portfolioWeight;
    var cmPW = this.asset.cash.mid.portfolioWeight;
    var clPW = this.asset.cash.lower.portfolioWeight;

    var other = 100;

    if(suPW == undefined) {
      suPW = 0;
    }
    if(smPW == undefined) {
      smPW = 0;
    }
    if(slPW == undefined) {
      slPW = 0;
    }

    if(buPW == undefined) {
      buPW = 0;
    }
    if(bmPW == undefined) {
      bmPW = 0;
    }
    if(blPW == undefined) {
      blPW = 0;
    }

    if(cuPW == undefined) {
      cuPW = 0;
    }
    if(cmPW == undefined) {
      cmPW = 0;
    }
    if(clPW == undefined) {
      clPW = 0;
    }


    var other = 100 - suPW - smPW - slPW - buPW - bmPW - blPW - cuPW - cmPW - clPW

    if (other < 0) {
      other = 0;
      document.getElementById("warning").style.display = "block"
    }

    var data = [other , suPW , smPW , slPW , buPW , bmPW , blPW , cuPW , cmPW , clPW]
    this.PieChart(data)
  }

  SwitchSelected(number) {
    this.SaveSubAsset(this.selected);
    var tab;
    var text;

    var i = 0;
    while (document.getElementById("tab" + i) != null) {
      if (i != number) {
        tab = document.getElementById("tab" + i);
        text = document.getElementById("text" + i);

        tab.style.backgroundColor = "rgb(170, 201, 171)";
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

    this.selected = number;
    this.UnpackHolders(number);

    if (number == 10) {
      this.model.numberOfAssets = this.iterator + 1;
      this.SaveSubAsset(this.selected);
      this.PushAsset(this.assetTab);
      this.post.SendData(this.model, 1);
    }
  }

  SwitchOverSelected(number) {
    this.SwitchSelected(0);

    var tab;
    var text;
    var subText;

    var i = 0;
    while (document.getElementById("overTab" + i) != null) {
      if (i != number) {
        tab = document.getElementById("overTab" + i);
        text = document.getElementById("overText" + i);

        tab.style.backgroundColor = "rgb(170, 201, 171)";
        text.style.color = "#222222";
      }
      i++;
    }

    tab = document.getElementById("overTab" + number);
    text = document.getElementById("overText" + number);

    if(number == 0) {
      for (var e = 0; e < 3; e++) {
        subText = document.getElementById("text" + e)
        subText.innerHTML = this.stockNames[e];
      }
    }
    else if (number == 1) {
      for (var e = 0; e < 3; e++) {
        subText = document.getElementById("text" + e)
        subText.innerHTML = this.bondNames[e];
      }
    }
    else if (number == 2) {
      for (var e = 0; e < 3; e++) {
        subText = document.getElementById("text" + e)
        subText.innerHTML = this.cashNames[e];
      }
    }

    if (tab != null) {
      tab.style.backgroundColor = "rgb(86, 150, 87)";
      text.style.color = "white";
    }

    this.overSelected = number;
    this.UnpackHolders(this.selected);
  }

  SaveSubAsset(number) {
    if (number == 0) {
      if (this.overSelected == 0) {
        this.asset.stocks.upper.expectedReturn = this.erHold;
        this.asset.stocks.upper.volatility = this.vHold;
        this.asset.stocks.upper.portfolioWeight = this.pwHold;
      }
      if (this.overSelected == 1) {
        this.asset.bonds.upper.expectedReturn = this.erHold;
        this.asset.bonds.upper.volatility = this.vHold;
        this.asset.bonds.upper.portfolioWeight = this.pwHold;
      }
      if (this.overSelected == 2) {
        this.asset.cash.upper.expectedReturn = this.erHold;
        this.asset.cash.upper.volatility = this.vHold;
        this.asset.cash.upper.portfolioWeight = this.pwHold;
      }
    }
    if (number == 1) {
      if (this.overSelected == 0) {
        this.asset.stocks.mid.expectedReturn = this.erHold;
        this.asset.stocks.mid.volatility = this.vHold;
        this.asset.stocks.mid.portfolioWeight = this.pwHold;
      }
      if (this.overSelected == 1) {
        this.asset.bonds.mid.expectedReturn = this.erHold;
        this.asset.bonds.mid.volatility = this.vHold;
        this.asset.bonds.mid.portfolioWeight = this.pwHold;
      }
      if (this.overSelected == 2) {
        this.asset.cash.mid.expectedReturn = this.erHold;
        this.asset.cash.mid.volatility = this.vHold;
        this.asset.cash.mid.portfolioWeight = this.pwHold;
      }
    }
    if (number == 2) {
      if (this.overSelected == 0) {
        this.asset.stocks.lower.expectedReturn = this.erHold;
        this.asset.stocks.lower.volatility = this.vHold;
        this.asset.stocks.lower.portfolioWeight = this.pwHold;
      }
      if (this.overSelected == 1) {
        this.asset.bonds.lower.expectedReturn = this.erHold;
        this.asset.bonds.lower.volatility = this.vHold;
        this.asset.bonds.lower.portfolioWeight = this.pwHold;
      }
      if (this.overSelected == 2) {
        this.asset.cash.lower.expectedReturn = this.erHold;
        this.asset.cash.lower.volatility = this.vHold;
        this.asset.cash.lower.portfolioWeight = this.pwHold;
      }
    }
  }

  UnpackHolders(number) {
    if (number == 0) {
      if (this.overSelected == 0) {
        this.erHold = this.asset.stocks.upper.expectedReturn;
        this.vHold = this.asset.stocks.upper.volatility;
        this.pwHold = this.asset.stocks.upper.portfolioWeight;
      }
      if (this.overSelected == 1) {
        this.erHold = this.asset.bonds.upper.expectedReturn;
        this.vHold = this.asset.bonds.upper.volatility;
        this.pwHold = this.asset.bonds.upper.portfolioWeight;
      }
      if (this.overSelected == 2) {
        this.erHold = this.asset.cash.upper.expectedReturn;
        this.vHold = this.asset.cash.upper.volatility;
        this.pwHold = this.asset.cash.upper.portfolioWeight;
      }
    }
    if (number == 1) {
      if (this.overSelected == 0) {
        this.erHold = this.asset.stocks.mid.expectedReturn;
        this.vHold = this.asset.stocks.mid.volatility;
        this.pwHold = this.asset.stocks.mid.portfolioWeight;
      }
      if (this.overSelected == 1) {
        this.erHold = this.asset.bonds.mid.expectedReturn;
        this.vHold = this.asset.bonds.mid.volatility;
        this.pwHold = this.asset.bonds.mid.portfolioWeight;
      }
      if (this.overSelected == 2) {
        this.erHold = this.asset.cash.mid.expectedReturn;
        this.vHold = this.asset.cash.mid.volatility;
        this.pwHold = this.asset.cash.mid.portfolioWeight;
      }
    }
    if (number == 2) {
      if (this.overSelected == 0) {
        this.erHold = this.asset.stocks.lower.expectedReturn;
        this.vHold = this.asset.stocks.lower.volatility;
        this.pwHold = this.asset.stocks.lower.portfolioWeight;
      }
      if (this.overSelected == 1) {
        this.erHold = this.asset.bonds.lower.expectedReturn;
        this.vHold = this.asset.bonds.lower.volatility;
        this.pwHold = this.asset.bonds.lower.portfolioWeight;
      }
      if (this.overSelected == 2) {
        this.erHold = this.asset.cash.lower.expectedReturn;
        this.vHold = this.asset.cash.lower.volatility;
        this.pwHold = this.asset.cash.lower.portfolioWeight;
      }
    }
  }

  SaveAsset(number) {

  }

  Finish() {

  }


  
  Hide(element) {
    document.getElementById(element).style.display = "none";
  }
}
