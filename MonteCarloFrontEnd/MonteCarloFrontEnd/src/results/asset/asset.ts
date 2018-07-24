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
  header;
  sticky;
  asset;
  normalMax = 0;
  laPlaceMax = 0;
  cauchyMax = 0;

  populateAsset(asset, prob, withdrawal) {
    //var graph=document.getElementById("graph"+number);
    // console.log("hello");
    console.log(asset);

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
    this.graph0.inputData(this.asset[0], prob[0], withdrawal[0],this.normalMax);
    this.graph1.inputData(this.asset[1], prob[1], withdrawal[1],this.laPlaceMax);
    this.graph2.inputData(this.asset[2], prob[2], withdrawal[2],this.cauchyMax);
    this.graph3.inputData(this.asset[3], prob[3], withdrawal[3],this.normalMax);
    this.graph4.inputData(this.asset[4], prob[4], withdrawal[4],this.laPlaceMax);
    this.graph5.inputData(this.asset[5], prob[5], withdrawal[5],this.cauchyMax);
  }
  attached() {
    // When the user scrolls the page, execute myFunction 
    var self = this;
    window.onscroll = function () { self.myFunction() };

    // Get the header
    this.header = document.getElementById("myHeader");

    // Get the offset position of the navbar
    this.sticky = this.header.offsetTop;
  }
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  myFunction() {
    if (window.pageYOffset > this.sticky) {
      this.header.classList.add("sticky");
    } else {
      this.header.classList.remove("sticky");
    }
  }

}


