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
 
  populateAsset(asset,prob,withdrawal) {
    //var graph=document.getElementById("graph"+number);
   // console.log("hello");
   // console.log(asset);
    this.asset = asset;
    this.graph0.inputData(this.asset[0],prob[0],withdrawal[0]);
    this.graph1.inputData(this.asset[1],prob[1],withdrawal[1]);
    this.graph2.inputData(this.asset[2],prob[2],withdrawal[2]);
    this.graph3.inputData(this.asset[3],prob[3],withdrawal[3]);
    this.graph4.inputData(this.asset[4],prob[4],withdrawal[4]);
    this.graph5.inputData(this.asset[5],prob[5],withdrawal[5]);
  }
attached(){
  // When the user scrolls the page, execute myFunction 
  var self=this;
window.onscroll = function() {self.myFunction()};

// Get the header
this.header=document.getElementById("myHeader");

// Get the offset position of the navbar
this.sticky=this.header.offsetTop;
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


