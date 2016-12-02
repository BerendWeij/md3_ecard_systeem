import RenderSystem from './systems/RenderSystem';
import Entity from './entities/Entity';
import EntityDragger from './editor/EntityDragger';

export default class Main {

  constructor(){
    console.log('Ready. Adding RenderSystem.');

    this.setup();
  }

  setup(){
    this.renderSystem = new RenderSystem();

    let entityDragger = new EntityDragger();


    document.addEventListener("keydown", ()=>{
      let tree = new Entity("tree");
      this.renderSystem.add( tree );
      tree.rotation = 30;

      entityDragger.target = tree;
    });


  }

}
