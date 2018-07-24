import { RouterConfiguration, Router, Redirect } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export default class App {

  router: Router;
  configureRouter(config, router) {
    config.title = '??????';
    config.options.pushState = true;
    config.map([
      { route: ['home'], name: 'home', moduleId: PLATFORM.moduleName('./home/home'), nav: true, title: 'Please Wait' },
      { route: ['','realHome'], name: 'realHome', moduleId: PLATFORM.moduleName('./realHome/realHome'), nav: true, title: 'Home' },
      { route: ['input'], name: 'input', moduleId: PLATFORM.moduleName('./input/input'), nav: true, title: 'homre' },
      { route: 'results', name: 'results', moduleId: PLATFORM.moduleName('./results/results'), nav: true, title: 'Results' },
      { route: 'portfolio', name: 'portfolio', moduleId: PLATFORM.moduleName('./portfolio/portfolio'), nav: true, title: 'Portfolio' },
      { route: 'about', name: 'about', moduleId: PLATFORM.moduleName('./about/about'), nav: true, title: 'About' },
    ]);
    this.router = router;
  }

  routeTo(page) {
    this.router.navigate(page)
  }

}
