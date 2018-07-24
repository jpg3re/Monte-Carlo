import { Chart } from "chart.js"
import { Graph } from "../graph/graph"
import { bindable } from "aurelia-framework";
export class Asset {

  graph0: Graph;
  graph1: Graph;
  graph2: Graph;
  graph3: Graph;
  graph4: Graph;
  graph5: Graph;
  // header;
  // sticky;
  asset;
  normalMax = 0;
  laPlaceMax = 0;
  cauchyMax = 0;
  prob;
  withdrawal;

  populateAsset(asset, prob, withdrawal) {
    //var graph=document.getElementById("graph"+number);
    // console.log("hello");
    console.log(asset);
    this.prob = prob;
    this.withdrawal = withdrawal;
    for (var i = 0; i < asset[0][0].amount.length; i++) {

      if (this.normalMax < asset[0][0].amount[i]) {
        this.normalMax = asset[0][0].amount[i];
      } else if (this.normalMax < asset[3][0].amount[i]) {
        this.normalMax = asset[3][0].amount[i];
      }

      if (this.laPlaceMax < asset[1][0].amount[i]) {
        this.laPlaceMax = asset[1][0].amount[i];
      } else if (this.laPlaceMax < asset[4][0].amount[i]) {
        this.laPlaceMax = asset[4][0].amount[i];
      }

      if (this.cauchyMax < asset[2][0].amount[i]) {
        this.cauchyMax = asset[2][0].amount[i];
      } else if (this.cauchyMax < asset[5][0].amount[i]) {
        this.cauchyMax = asset[5][0].amount[i];
      }
    }

    this.asset = asset;

    this.graph0.inputData(this.asset[0], prob[0], withdrawal[0], this.normalMax, "Projected Normally Distributed Returns");
    this.graph1.inputData(this.asset[3], prob[3], withdrawal[3], this.normalMax, "Historical Normally Distributed Returns");
  }

  selectDistribution(number) {
    console.log(number)
    var tabs = document.getElementsByClassName("tabThing");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('is-active');
    }
    var num = document.getElementById("dist" + number);
    num.classList.add('is-active');
    if (number == 0) {
      this.graph0.inputData(this.asset[0], this.prob[0], this.withdrawal[0], this.normalMax, "Projected Normally Distributed Returns");
      this.graph1.inputData(this.asset[3], this.prob[3], this.withdrawal[3], this.normalMax, "Historical Normally Distributed Returns");
    }
    if (number == 1) {
      this.graph0.inputData(this.asset[1], this.prob[1], this.withdrawal[1], this.laPlaceMax, "Projected Laplace Distributed Returns");
      this.graph1.inputData(this.asset[4], this.prob[4], this.withdrawal[4], this.laPlaceMax, "Historical Laplace Distributed Returns");
    }
    if (number == 2) {
      this.graph0.inputData(this.asset[2], this.prob[2], this.withdrawal[2], this.cauchyMax, "Projected Cauchy Distributed Returns");
      this.graph1.inputData(this.asset[5], this.prob[5], this.withdrawal[5], this.cauchyMax, "Historical Cauchy Distributed Returns");
    }
  }
  // attached() {
  //   // When the user scrolls the page, execute myFunction 
  //   var self = this;
  //   window.onscroll = function () { self.myFunction() };

  //   // Get the header
  //   this.header = document.getElementById("myHeader");

  //   // Get the offset position of the navbar
  //   this.sticky = this.header.offsetTop;
  // }
  // // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // myFunction() {
  //   if (window.pageYOffset > this.sticky) {
  //     this.header.classList.add("sticky");
  //   } else {
  //     this.header.classList.remove("sticky");
  //   }
  // }

}


