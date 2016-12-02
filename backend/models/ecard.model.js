/**
 * Created by Artur on 11/18/2016.
 */
var mongoose = require('mongoose');
var config = require('../config');
var Schema = mongoose.Schema;

var  objectSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    x: {
        type: Number,
        require: true,
        max: config.canvas.maxWidth
    },
    y: {
        type: Number,
        require: true,
        max: config.canvas.maxHeight
    },
    z: {
        type: Number,
        require: true
    },
    rotation: {
        type: Number,
        require: true
    },
    scale: {
        type: Number,
        requite: true
    }

});

var ecardSchema = new Schema({
    creatorName: {
        type: String,
        require: true
    },
    receiverName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    objects: [
        objectSchema
    ]
});

module.exports = mongoose.model('Ecard',ecardSchema);
