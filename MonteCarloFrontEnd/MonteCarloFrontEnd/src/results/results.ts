import { Asset } from "./asset/asset"
import { Chart } from "chart.js"
import { bindable } from "aurelia-framework";
export default class Results {
  tab0: Asset;
  numTabs;
  Data;
  Withdrawals = [];
  ProbOfSucces = [];
  @bindable name1;
  @bindable name2;
  @bindable name3;
  attached() {
    var results = JSON.parse(localStorage.getItem('results'));
    console.log(results);
    this.formatData(results);
    this.name1=results.names[0];
    this.numTabs = this.Data.length / 6;
    if (this.numTabs == 1) {
      var tab1 = document.getElementById("asset1");
      var tab2 = document.getElementById("asset2");
      tab1.style.display = "none";
      tab2.style.display = "none";
    }
    else if (this.numTabs == 2) {
      var tab2 = document.getElementById("asset2");
      tab2.style.display = "none";
      this.name2=results.names[1];
      
    }else{
      this.name3=results.names[2];
      this.name2=results.names[1];

    }
    var asset1Data = [];
    var asset1With = [];
    var asset1Prob = [];
    for (var i = 0; i < 6; i++) {
      asset1Data.push(this.Data[i]);
      asset1Prob.push(this.ProbOfSucces[i]);
      asset1With.push(this.Withdrawals[i]);
    }
    this.tab0.populateAsset(asset1Data, asset1Prob, asset1With);
  }

  formatData(data) {
    var Data = [];
    for (var x = 0; x < data.distributions.length; x++) {
      var tempPercentiles = [];
      for (var i = 0; i < 9; i++) {
        var tempAmount = [];
        var tempWithdrawal = [];
        var tempGrowth = [];
        for (var j = 0; j < data.distributions[x].percentiles[i].yearlies.length; j++) {
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
    this.Data = Data;

    for (var i = 0; i < data.distributions.length; i++) {
      var tempAvgWithdrawal = [];
      this.ProbOfSucces.push(data.distributions[i].probabilityOfSuccess);
      for (var j = 0; j < 9; j++) {
        tempAvgWithdrawal.push(data.distributions[i].percentiles[j].averageWithdrawls);
      }
      this.Withdrawals.push(tempAvgWithdrawal);
    }
  }




  switchTab(tab) {
    this.tab0.resetTabs();
    var tabs = document.getElementsByClassName("tabThings");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('is-active');
    }
    var number = document.getElementById("asset" + tab);
    if (tab == 0) {
      var asset1Data = [];
      var asset1With = [];
      var asset1Prob = [];
      for (var i = 0; i < 6; i++) {
        asset1Prob.push(this.ProbOfSucces[i]);
        asset1With.push(this.Withdrawals[i]);
        asset1Data.push(this.Data[i]);
      }
      this.tab0.populateAsset(asset1Data, asset1Prob, asset1With);
    }
    if (tab == 1) {
      var asset2Data = [];
      var asset2With = [];
      var asset2Prob = [];
      for (var i = 6; i < 12; i++) {
        asset2Data.push(this.Data[i]);
        asset2Prob.push(this.ProbOfSucces[i]);
        asset2With.push(this.Withdrawals[i]);
      }
      this.tab0.populateAsset(asset2Data, asset2Prob, asset2With);

    }
    if (tab == 2) {
      var asset3Data = [];
      var asset3With = [];
      var asset3Prob = [];
      for (var i = 12; i < 18; i++) {
        asset3Data.push(this.Data[i]);
        asset3Prob.push(this.ProbOfSucces[i]);
        asset3With.push(this.Withdrawals[i]);
      }
      this.tab0.populateAsset(asset3Data, asset3Prob, asset3With);

    }
    number.classList.add('is-active');

    var dataTabs = document.getElementsByClassName("tabInfo");
  }
}


