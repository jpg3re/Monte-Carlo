import Model from "model";

export default class Input {
  
  model = new Model();

  selected = 0;
  iterator = 0;

  erHold;
  vHold;
  pwHold;

  SwitchSelected(number) {
    var tab;
    var text;

    var i = 0;

    while(document.getElementById("tab" + i) != null) {
      if (i != number) {
        tab = document.getElementById("tab" + i);
        text = document.getElementById("text" + i);

        tab.style.backgroundColor = "white";
        text.style.color = "#222222";
      }
      i++;
    }
    tab = document.getElementById("tab" + number);
    text = document.getElementById("text" + number);


    tab.style.backgroundColor = "rgb(86, 150, 87)";
    text.style.color = "white";

    this.selected = number;
  }


}
