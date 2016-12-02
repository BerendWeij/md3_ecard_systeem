import MovingEntity from './MovingEntity';

export default class Dog extends MovingEntity {

	constructor(){
        super();

        this.id = "dog";

        this.velocity.x = -7;
    }
}