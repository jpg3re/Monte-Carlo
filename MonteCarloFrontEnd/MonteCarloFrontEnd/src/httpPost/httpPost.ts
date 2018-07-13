export default class HTTPPost {
  results

  SendData(model,asset) {
    var self = this;
    var api;

    console.log(model);

    if (asset == 1) {
      api = 'http://localhost:52170/api/';
      model = model[0];
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
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: model
      });
      self.results = await response.json();
    }

    var Redirect = () => {
      var url = window.location.href;
      localStorage.setItem('results', JSON.stringify(self.results));
      if (url == "http://localhost:8080/input/") {
        window.location.href = "results";
      }
      return this.results;
    }

    f().then(Redirect);
  }
}
