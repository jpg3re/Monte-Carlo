import HTTPPost from "../httpPost/httpPost"

export default class Home {
  post = new HTTPPost();

  attached() {
    var model = JSON.parse(sessionStorage.getItem('model'));
    this.post.SendData(model, 1);
  }

  GetStarted() {
    window.location.href = "input"
  }

}
