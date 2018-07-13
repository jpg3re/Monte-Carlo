import AssetType from "./assettype"

export default class Asset {
  name : string;

  stocks = new AssetType();
  bonds = new AssetType();
  cash = new AssetType();
  
  currAmount: number;
  addPerYear: number;
  yearsOfAdd: number;
  yearsOfWith: number;
}
