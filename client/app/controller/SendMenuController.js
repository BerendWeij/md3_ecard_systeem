export default class SendMenuController {
  constructor() {
    var sendMenu = document.querySelector("div.sendMenu");
    sendMenu.querySelector("p").addEventListener("mousedown",function(){
      sendMenu.classList.toggle("fullHeight");
    });
  }

  sendEcard(){
    let ecard = {
      // name: "Luuk",
      // answer: document.getElementById('answer').value

      creatorName: req.body.creatorName,
      receiverName: req.body.receiverName,
      email: req.body.email,
      objects: [
        {
          id: req.body.id,
          x: req.body.x,
          y: req.body.y,
          z: req.body.z,
          rotation: req.body.rotation,
          scale: req.body.scale
        }
      ]

      // orgineel
      
      // creatorName: req.body.creatorName,
      // receiverName: req.body.receiverName,
      // email: req.body.email,
      // objects: [
      //   {
      //     id: req.body.id,
      //     x: req.body.x,
      //     y: req.body.y,
      //     z: req.body.z,
      //     rotation: req.body.rotation,
      //     scale: req.body.scale
      //   }
      // ]

      //test gegevens

      // creatorName: testpersoon,
      // receiverName: antvangtestpersoon,
      // email: 'test@test.nl',
      // objects: [
      //   {
      //     id: req.body.id,
      //     x: req.body.x,
      //     y: req.body.y,
      //     z: req.body.z,
      //     rotation: req.body.rotation,
      //     scale: req.body.scale
      //   }
      // ]
    };

    let postData = {
      method: 'post',
      body: JSON.stringify(ecard)
    };

    // fetch('https://davidwalsh.name/submit-json', postData);
    fetch('/ecard', postData);
  }
}