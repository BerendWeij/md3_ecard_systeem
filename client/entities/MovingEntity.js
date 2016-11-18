import Entity from './Entity';

export default class MovingEntity extends Entity {

    constructor(id = "test", x = 0, y = 0, z = 0, rotation = 0){
        super(id, x, y, z, rotation);

        // ik kan een setInterval starten om mezelf te updaten
        this.x -= 200;
    }

}