export default class RenderSystem {

  // <div style="width:100px;height:100px;background:red;position:absolute;transform: perspective(500px) translate3d(10px,0px,-200px);z-index:-200;"></div>

  constructor(){
    console.log('een rendersysteem');

    this._container = document.querySelector("#world-container");

    this._counter = 0;

    this.entities = [];

    // todo: make a global game loop
    setInterval(()=>{
      this.update();
    }, 1000/30);
  }

  add(newEntity){

    let element,
        currentName;

    this._counter++;

    element = document.createElement("DIV");
    currentName = "entity_" + this._counter;

    element.className = newEntity.id;
    element.id = currentName;

    this.entities.push({element: element, entity: newEntity});

    this._container.appendChild(element);
  }

  update(){
    this.entities.forEach((currentEntity)=>{
      let x = currentEntity.entity.x,
          y = currentEntity.entity.y,
          z = currentEntity.entity.z;

      // todo: refactor: alleen de positie aanpassen. Hoe hij eruit ziet moet naar SASS
      currentEntity.element.style = `width:100px;height:100px;background:red;position:absolute;transform:perspective(500px) translate3d(${x}px,${y}px,${z}px);z-index:${z};`;
    });
  }

  /**
   * Get a list with all the entities
   * @returns {array} a list with all the entities
   */
  get entities() {
    return this._entities;
  }

  /**
   * Set a list with all the entities
   * @param {array} value - a list with all the entities
   */
  set entities(value) {
    this._entities = value;
  }

}
