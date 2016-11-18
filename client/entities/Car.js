import MovingEntity from './MovingEntity';

export default class Car extends MovingEntity {

	constructor(){
        super();

        this.id = "car";

        this.velocity.x = 5;
    }
}