export default class Model {
  assetHolder = [];
  lcHolder = [];
  scHolder = [];
  ustHolder = [];
  corpHolder = [];
  htmlHolder = [];
  lumpSum : number;


  // retirementDateYear = this.retirementDate.getFullYear();
  // deathDateYear = this.deathDate.getFullYear();
  assets = {  "assets" : this.assetHolder,
                      "matching" : this.lcHolder,
                      "caps" : this.scHolder,
                      "amounts" : this.ustHolder,
                      "additions" : this.corpHolder }
}
