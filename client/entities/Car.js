import MovingEntity from './MovingEntity';

export default class Car extends MovingEntity {

	constructor(){
        super();

        this.id = "Car";

        this.velocity.x = 5;
    }
}