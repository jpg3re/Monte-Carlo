import {Asset} from "../asset/asset"

export default class Results {
  tab:Asset;
  attached() {
    var results = JSON.parse(localStorage.getItem('results'));
    console.log(results);
  }

  switchTab(tab) {
    var tabs = document.getElementsByClassName("tabThings");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('is-active');
    }
    var number = document.getElementById("asset" + tab);
    number.classList.add('is-active');

    var dataTabs = document.getElementsByClassName("tabInfo");
    for (var i = 0; i < dataTabs.length; i++) {
      dataTabs[i].classList.remove('is-active');
    }
    var displayTab = document.getElementById("dataContent" + tab);
    displayTab.classList.add('is-active');

  }
}
