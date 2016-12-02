import RenderSystem from './systems/RenderSystem';
import Entity from './entities/Entity';
import Car from './entities/Car';
import Tree from './entities/Tree';
import Mario from './entities/Mario';

export default class Main {

  constructor(){
    console.log('Ready. Adding RenderSystem.');

    this.setup();
  }

  setup(){
    this.renderSystem = new RenderSystem();

    let car = new Car();
    this.renderSystem.add( car );

    let tree = new Tree();
    this.renderSystem.add( tree );

    let mario = new Mario();
    this.renderSystem.add ( mario );

  }

}
