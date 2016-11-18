import RenderSystem from './systems/RenderSystem';
import Entity from './entities/Entity';
import Car from './entities/Car';

export default class Main {

  constructor(){
    console.log('Ready. Adding RenderSystem.');

    this.setup();
  }

  setup(){
    this.renderSystem = new RenderSystem();


    let car = new Car();
    this.renderSystem.add( car );

  }

}
