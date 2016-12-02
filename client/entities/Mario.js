import MovingEntity from './MovingEntity';

export default class Mario extends MovingEntity {

	constructor(){
        super();

        this.id = "mario";

        this.velocity.x = 3;
    }
}