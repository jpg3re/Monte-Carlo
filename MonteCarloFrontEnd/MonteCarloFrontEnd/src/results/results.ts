export default class Results {

  attached() {
    var results = JSON.parse(localStorage.getItem('results'));
    console.log(results);
  }
}
