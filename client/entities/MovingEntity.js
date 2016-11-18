import Entity from './Entity';

export default class MovingEntity extends Entity {

    constructor(id = "test", x = 0, y = 0, z = 0, rotation = 0, velocity = {x:0, y:0}){
        super(id, x, y, z, rotation);

        this.velocity = velocity;

       setInterval(()=>{
      		this.update();
    	}, 60);

    }

    update(){
    	this.x += this.velocity.x;
      	this.y -= this.velocity.y;
    }

}