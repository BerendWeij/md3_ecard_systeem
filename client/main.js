import RenderSystem from './systems/RenderSystem';
import Entity from './entities/Entity';
import MovingEntity from './entities/MovingEntity';
import mouseTracking from './entities/mouseTracking';

export default class Main {

  constructor(){
    console.log('Ready. Adding RenderSystem.');

    this.setup();
  }

  setup(){
    this.renderSystem = new RenderSystem();


    let testEntity = new MovingEntity("miauw");
    this.renderSystem.add( testEntity );

  }

}
