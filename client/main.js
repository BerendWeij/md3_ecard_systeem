import RenderSystem from './systems/RenderSystem';
import Entity from './entities/Entity';

import MovingEntity from './entities/MovingEntity';
import mouseTracking from './entities/mouseTracking';

import Car from './entities/Car';
import Tree from './entities/Tree';
import Mario from './entities/Mario';
import House from './entities/House';

import Elephant from './entities/Elephant';
import Regen from './entities/Regen';
import Cloud from './entities/Cloud';

import Sun from './entities/Sun';


export default class Main {

  constructor(){
    console.log('Ready. Adding RenderSystem.');

    this.setup();
  }

  setup(){
    this.renderSystem = new RenderSystem();

    let sun = new Sun();
    this.renderSystem.add(sun);

    let tree = new Tree();
    this.renderSystem.add(tree);

    let house = new House();
    this.renderSystem.add(house);

    let car = new Car();
    this.renderSystem.add(car);



    let mario = new Mario();
    this.renderSystem.add (mario);

    let elephant = new Elephant();
    this.renderSystem.add (elephant);

    let regen = new Regen();
    this.renderSystem.add (regen);

    let cloud = new Cloud();
    this.renderSystem.add (cloud);


  }

}
