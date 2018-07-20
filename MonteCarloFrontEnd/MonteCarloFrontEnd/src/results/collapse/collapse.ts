import { bindable, inject } from "aurelia-framework";
export class collapse {

  users = [];


  @bindable number;
  toggle() {

    var text = document.getElementById("text" + this.number);
    var minus = document.getElementById("minus" + this.number);
    var plus = document.getElementById("plus" + this.number);

    if (text.style.display === "none") {
      text.style.display = "block";
      minus.style.display = "block"
      plus.style.display = "none"
    } else {
      text.style.display = "none";
      plus.style.display = "block"
      minus.style.display = "none"
    }
  }
  updateData(data) {
    //console.log(data);
    this.users = data;
    
  }
}
