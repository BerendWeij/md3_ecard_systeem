import RenderSystem from './systems/RenderSystem';
import Entity from './entities/Entity';

import MovingEntity from './entities/MovingEntity';
import mouseTracking from './entities/mouseTracking';

import Car from './entities/Car';


export default class Main {

  constructor(){
    console.log('Ready. Adding RenderSystem.');

    this.setup();
  }

  setup(){
    this.renderSystem = new RenderSystem();



    let miauw = new Miauw();
    this.renderSystem.add( miauw );

    let car = new Car();
    this.renderSystem.add( car );


  }

}
