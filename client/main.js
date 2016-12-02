import RenderSystem from './systems/RenderSystem';
import Entity from './entities/Entity';

import MovingEntity from './entities/MovingEntity';
import mouseTracking from './entities/mouseTracking';

import Car from './entities/Car';
import Tree from './entities/Tree';
import Mario from './entities/Mario';
import House from './entities/House';

export default class Main {

  constructor(){
    console.log('Ready. Adding RenderSystem.');

    this.setup();
  }

  setup(){
    this.renderSystem = new RenderSystem();

    let house = new House();
    this.renderSystem.add(house);

    let car = new Car();
    this.renderSystem.add(car);

    let tree = new Tree();
    this.renderSystem.add(tree);

    let mario = new Mario();
    this.renderSystem.add (mario);


  }

}
