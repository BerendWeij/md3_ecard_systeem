export default class SendMenuController {
  constructor() {
    var sendMenu = document.querySelector("div.sendMenu");
    sendMenu.querySelector("p").addEventListener("mousedown",function(){
      sendMenu.classList.toggle("fullHeight");
    });
  }
}
