import Model from "input/model/model";

export default class HTTPPost {
  results

  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

  SendData(model:Model,asset) {
    var self = this;
    var api;
    var self = this;
    console.log(model.assetHolder)
    for(var counter = 0; counter < model.numberOfAssets; counter++){
      var element = model.assetHolder[counter];
        if(element.bonds.lower.expectedReturn == null){
          model.assetHolder[counter].bonds.lower.expectedReturn = 0;
        }
        if(element.bonds.lower.volatility == null){
          model.assetHolder[counter].bonds.lower.volatility = 0;
        }
        if(element.bonds.lower.portfolioWeight == null){
          model.assetHolder[counter].bonds.lower.portfolioWeight = 0;
        }
        if(element.bonds.mid.expectedReturn == null){
          model.assetHolder[counter].bonds.mid.expectedReturn = 0;
        }
        if(element.bonds.mid.volatility == null){
          model.assetHolder[counter].bonds.mid.volatility = 0;
        }
        if(element.bonds.mid.portfolioWeight == null){
          model.assetHolder[counter].bonds.mid.portfolioWeight = 0;
        }
        if(element.bonds.upper.expectedReturn == null){
          model.assetHolder[counter].bonds.upper.expectedReturn = 0;
        }
        if(element.bonds.upper.volatility == null){
          model.assetHolder[counter].bonds.upper.volatility = 0;
        }
        if(element.bonds.upper.portfolioWeight == null){
          model.assetHolder[counter].bonds.upper.portfolioWeight = 0;
        }
        if(element.stocks.lower.expectedReturn == null){
          model.assetHolder[counter].stocks.lower.expectedReturn = 0;
        }
        if(element.stocks.lower.volatility == null){
          model.assetHolder[counter].stocks.lower.volatility = 0;
        }
        if(element.stocks.lower.portfolioWeight == null){
          model.assetHolder[counter].stocks.lower.portfolioWeight = 0;
        }
        if(element.stocks.mid.expectedReturn == null){
          model.assetHolder[counter].stocks.mid.expectedReturn = 0;
        }
        if(element.stocks.mid.volatility == null){
          model.assetHolder[counter].stocks.mid.volatility = 0;
        }
        if(element.stocks.mid.portfolioWeight == null){
          model.assetHolder[counter].stocks.mid.portfolioWeight = 0;
        }
        if(element.stocks.upper.expectedReturn == null){
          model.assetHolder[counter].stocks.upper.expectedReturn = 0;
        }
        if(element.stocks.upper.volatility == null){
          model.assetHolder[counter].stocks.upper.volatility = 0;
        }
        if(element.stocks.upper.portfolioWeight == null){
          model.assetHolder[counter].stocks.upper.portfolioWeight = 0;
        }
        if(element.cash.lower.expectedReturn == null){
          model.assetHolder[counter].cash.lower.expectedReturn = 0;
        }
        if(element.cash.lower.volatility == null){
          model.assetHolder[counter].cash.lower.volatility = 0;
        }
        if(element.cash.lower.portfolioWeight == null){
          model.assetHolder[counter].cash.lower.portfolioWeight = 0;
        }
        if(element.cash.mid.expectedReturn == null){
          model.assetHolder[counter].cash.mid.expectedReturn = 0;
        }
        if(element.cash.mid.volatility == null){
          model.assetHolder[counter].cash.mid.volatility = 0;
        }
        if(element.cash.mid.portfolioWeight == null){
          model.assetHolder[counter].cash.mid.portfolioWeight = 0;
        }
        if(element.cash.upper.expectedReturn == null){
          model.assetHolder[counter].cash.upper.expectedReturn = 0;
        }
        if(element.cash.upper.volatility == null){
          model.assetHolder[counter].cash.upper.volatility = 0;
        }
        if(element.cash.upper.portfolioWeight == null){
          model.assetHolder[counter].cash.upper.portfolioWeight = 0;
        }
        if(element.addPerYear == null){
          model.assetHolder[counter].addPerYear = 0;
        }
        if(element.currAmount == null){
          model.assetHolder[counter].currAmount = 0;
        }
        if(element.name == null){
          model.assetHolder[counter].name = "";
        }
        if(element.withPerYear == null){
          model.assetHolder[counter].withPerYear = 0;
        }
        if(element.yearsOfAdd == null){
          model.assetHolder[counter].yearsOfAdd = 0;
        }
        if(element.yearsOfWith == null){
          model.assetHolder[counter].yearsOfWith = 0;
        }
        counter++;
      }
    console.log(JSON.stringify(model));
    if (asset == 1) {
      api = 'http://localhost:52170/api/';
    }
    else if (asset == 2) {
      api = 'http://localhost:52170/api/2';
    }
    else {
      api = 'http://localhost:52170/api/3';
    }

    async function f() {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(model)
      });
      self.results = await response.json();
      console.log(self.results)
    }

    var Redirect = () => {
      var url = window.location.href;
      sessionStorage.setItem('results', JSON.stringify(self.results));
      window.location.href = "results";
      return this.results;
    }
    f().then(Redirect);
  }
}
