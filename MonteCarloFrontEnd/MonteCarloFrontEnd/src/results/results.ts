import { Asset } from "./asset/asset"
import { Chart } from "chart.js"
export default class Results {
  tab0: Asset;
  numTabs;
  Data ;

  attached() {
    var results = JSON.parse(localStorage.getItem('results'));
    console.log("hi");
     console.log(results);
     console.log("uiygiugiu");
     this.formatData(results);
    this.numTabs = this.Data.length/6;
    if (this.numTabs == 1) {
      var tab1 = document.getElementById("asset1");
      var tab2 = document.getElementById("asset2");
      tab1.style.display = "none";
      tab2.style.display = "none";
    }
    else if (this.numTabs == 2) {
      var tab2 = document.getElementById("asset2");
      tab2.style.display = "none";
    }
   this.tab0.populateAsset(this.Data);
  }

  formatData(data) {
    console.log("start");
    var Data = [];
    console.log(data);
console.log(data.distributions.length)
console.log(data.distributions.length)
console.log(data.distributions[0].percentiles[0].yearlies.length)
    for (var x = 0; x < data.distributions.length; x++){
      var tempPercentiles = [];
    for (var i = 0; i < 9; i++) {
      var tempAmount = [];
      var tempWithdrawal = [];
      var tempGrowth = [];
      for (var j = 0; j < data.distributions[0].percentiles[0].yearlies.length; j++) {
        tempAmount.push(data.distributions[x].percentiles[i].yearlies[j].amount);
        tempWithdrawal.push(data.distributions[x].percentiles[i].yearlies[j].withdrawl);
        tempGrowth.push(data.distributions[x].percentiles[i].yearlies[j].growth);
      }
      tempPercentiles.push({
        'amount': tempAmount,
        'withdrawal': tempWithdrawal,
        'growth': tempGrowth
      });
    }
    Data.push(tempPercentiles);
    
    }
  this.Data=Data;
  console.log(this.Data);
  }




  switchTab(tab) {
    var tabs = document.getElementsByClassName("tabThings");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('is-active');
    }
    var number = document.getElementById("asset" + tab);
    if (tab == 0) {
      this.tab0.populateAsset(this.Data[0]);
    }
    if (tab == 1) {
      this.tab0.populateAsset(this.Data[1]);

    }
    if (tab == 2) {
      this.tab0.populateAsset(this.Data[2]);

    }
    number.classList.add('is-active');

    var dataTabs = document.getElementsByClassName("tabInfo");

  }
}


