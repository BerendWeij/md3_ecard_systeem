/**
 * BaseClass for all of our entities
 */
export default class Entity {

    constructor(id = "test", x = 0, y = 0, z = 0, rotation = 0){
        console.log('new enity');

        this.id = id;
        this.x = x;
        this.y = y;
        this.z = z;
        this.rotation = rotation;
    }

    /**
     * Get the id of this entity
     * @returns {string} the id of this entity
     */
    get id() {
        return this._id;
    }

    /**
     * Set the id of this entity
     * @param {string} value - the id of this entity
     */
    set id(value) {
        this._id = value;
    }

    /**
     * Get x
     * @returns {int} x
     */
    get x() {
        return this._x;
    }

    /**
     * Set x
     * @param {int} value - x
     */
    set x(value) {
        this._x = value;
    }

    /**
     * Get y
     * @returns {int} y
     */
    get y() {
        return this._y;
    }

    /**
     * Set y
     * @param {int} value - y
     */
    set y(value) {
        this._y = value;
    }

    /**
     * Get z
     * @returns {int} z
     */
    get z() {
        return this._z;
    }

    /**
     * Set z
     * @param {int} value - z
     */
    set z(value) {
        this._z = value;
    }

    /**
     * Get rotation
     * @returns {int} rotation
     */
    get rotation() {
        return this._rotation;
    }

    /**
     * Set rotation
     * @param {int} value - rotation
     */
    set rotation(value) {
        this._rotation = value;
    }


}