import RenderSystem from './systems/RenderSystem';
import Entity from './entities/Entity';
import MovingEntity from './entities/MovingEntity';

export default class Main {

  constructor(){
    console.log('Ready. Adding RenderSystem.');

    this.setup();
  }

  setup(){
    this.renderSystem = new RenderSystem();

    let testEntity = new MovingEntity();
    this.renderSystem.add( testEntity );

    setInterval(()=>{
      //testEntity.x += 5;
    }, 50);
  }

}
