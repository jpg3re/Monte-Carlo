export default class Input {
  attached() {
    console.log("seen")
  }

  selected = 0;

  SwitchSelected(number) {
    var tab;
    var text;
    var arrow;
    var icon;
    var inputs;

    var i = 0;

    while(document.getElementById("tab" + i) != null) {
      if (i != number) {
        tab = document.getElementById("tab" + i);
        arrow = document.getElementById("arrow" + i);
        text = document.getElementById("text" + i);
        icon = document.getElementById("icon" + i);
        inputs = document.getElementById("inputs" + i);

        tab.style.backgroundColor = "white";
        arrow.style.display = "none"; 
        text.style.color = "#222222";
        icon.style.color = "#222222"; 
        inputs.style.display = "none";
      }
      i++;
    }
    tab = document.getElementById("tab" + number);
    arrow = document.getElementById("arrow" + number);
    text = document.getElementById("text" + number);
    icon = document.getElementById("icon" + number);
    inputs = document.getElementById("inputs" + number);


    tab.style.backgroundColor = "rgb(86, 150, 87)";
    arrow.style.display = "block";
    text.style.color = "white";
    icon.style.color = "white";
    inputs.style.display = "block";

    this.selected = number;
  }
}
