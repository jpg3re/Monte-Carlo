export default class HTTPPost {
  results

  SendData(model,asset) {
    var self = this;
    var api;

    console.log(JSON.stringify(model));

    if (asset == 1) {
      api = 'http://localhost:52170/api/';
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
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(model)
      });
      self.results = await response.json();
      console.log(self.results)
    }

    var Redirect = () => {
      var url = window.location.href;
      localStorage.setItem('results', JSON.stringify(self.results));
      localStorage.setItem('model', JSON.stringify(model));
      window.location.href = "results";
      return this.results;
    }

    f().then(Redirect);
  }
}
