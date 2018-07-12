import AssetInfo from "./assetinfo"

export default class Asset {
  name : string;

  largeCap = new AssetInfo();
  smallCap = new AssetInfo();
  usTreasury = new AssetInfo();
  corporations = new AssetInfo();

  currAmount: number;
  addPerYear: number;
  yearsOfAdd: number;
  yearsOfWith: number;
}
