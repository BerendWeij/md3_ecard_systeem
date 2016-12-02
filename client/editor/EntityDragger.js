export default class EntityDragger {

    constructor(){
        this.initListeners();
    }

    initListeners(){
        
        // start dragging when the mouse is down
        document.addEventListener("mousedown", (event)=>this.startDragging({
            x:event.clientX,
            y:event.clientY
        }));

        // stop dragging when the mouse is up
        document.addEventListener("mouseup", ()=>this.stopDragging());

        // listen to the mousemove for dragging the object
        document.addEventListener("mousemove", (event)=>{
            if(this.isDragging && this.target) {
                this.drag({
                    x: event.clientX,
                    y: event.clientY
                });
            }
        });
    }

    drag(mousePosition){
        let xOffset = mousePosition.x - this._lastDragPosition.x,
            yOffset = mousePosition.y - this._lastDragPosition.y;

        this.target.x += xOffset;
        this.target.y += yOffset;

        this._lastDragPosition = mousePosition;
    }

    startDragging(mousePosition){
        this.isDragging = true;
        this._lastDragPosition = mousePosition;
    }

    stopDragging(){
        this.isDragging = false;
    }

    /**
     * Get the target of this Class
     * @returns {object} the target of this Class
     */
    get target() {
        return this._target;
    }

    /**
     * Set the target of this Class
     * @param {object} value - the target of this Class
     */
    set target(value) {
        this._target = value;
    }

}