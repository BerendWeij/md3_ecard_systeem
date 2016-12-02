let x;
let y;
document.addEventListener("mousemove", function(event){
    x = event.clientX;
    y = event.clientY;
    console.log('x postistie is' + x + 'x postistie is' + y)
});
import MovingEntity from './MovingEntity';

export default class Miauw extends MovingEntity {

    constructor(){
        super();

        this.id = "miauw";

        this.velocity.x = 5;
    }
}