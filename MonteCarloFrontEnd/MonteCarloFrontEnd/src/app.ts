import { RouterConfiguration, Router, Redirect } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import { inject } from 'aurelia-framework';

export default class App {

  router: Router;
  configureRouter(config, router) {
    config.title = '??????';
    config.options.pushState = true;
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./home/home'), nav: true, title: 'Home' },
      { route: 'input', name: 'input', moduleId: PLATFORM.moduleName('./input/input'), nav: true, title: 'About Client' },
      { route: 'portfolio', name: 'portfolio', moduleId: PLATFORM.moduleName('./portfolio/portfolio'), nav: true, title: 'Portfolio' },
    ]);
    this.router = router;
  }

    // THIS FUNCTION IS USED TO POST AND RECEIVE DATA
    SendData() {
      var self = this;
      async function f() {
        const response = await fetch('http://localhost:64655/api/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          // body: JSON.stringify(self.client)
        });
        // self.results = await response.json();
      }
  
      var Redirect = () => {
        var url = window.location.href;
        if (url == "http://localhost:8080/" || url == "http://localhost:8080/home" || url == "http://localhost:8080/#generalInfo" || url == "http://localhost:8080/#financesInfo") {
          this.router.navigate("/results")
        }
        return 1;
      }
  
      f().then(Redirect)
    }
}
