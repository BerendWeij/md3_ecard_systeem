import RenderSystem from './systems/RenderSystem';

export default class Main {

  constructor(){
    console.log('Ready. Adding RenderSystem.');

    this.setup();
  }

  setup(){
    this.renderSystem = new RenderSystem();


    let test = {x:50, y:-50, z:5, id:"test"};
    this.renderSystem.add(test);
    this.renderSystem.add({x:15, y:-150, z:-205, id:"test"});
    this.renderSystem.add({x:500, y:5, z:5, id:"test"});
    this.renderSystem.add({x:5, y:-250, z:50, id:"test"});

    setInterval(()=>{
      test.x += 5;
    }, 50);
  }

}
