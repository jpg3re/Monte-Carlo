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
}
