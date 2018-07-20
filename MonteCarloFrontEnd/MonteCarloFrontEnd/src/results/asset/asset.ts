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
  
  asset;
 
  populateAsset(asset) {
    //var graph=document.getElementById("graph"+number);
   // console.log("hello");
   // console.log(asset);
    this.asset = asset;
    this.graph0.inputData(this.asset[0]);
    this.graph1.inputData(this.asset[1]);
    this.graph2.inputData(this.asset[2]);
    this.graph3.inputData(this.asset[3]);
    this.graph4.inputData(this.asset[4]);
    this.graph5.inputData(this.asset[5]);
  }
}
