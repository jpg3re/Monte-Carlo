import { bindable, inject } from "aurelia-framework";
export class collapse {

  users = [
    {
      'year': 4,
      'amount': 1,
      'withdrawal': 14,
      'growth': 25
    },
    {
      'year': 43,
      'amount': 51,
      'withdrawal': 44,
      'growth': 15
    },
    {
      'year': 442,
      'amount': 51,
      'withdrawal': 41,
      'growth': 53
    }
  ];


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
    this.users = data;
    console.log(this)
    console.log(this.users);
  }
}
