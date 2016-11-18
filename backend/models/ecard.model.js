/**
 * Created by Artur on 11/18/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  objectSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    x: {
        type: Number,
        require: true
    },
    y: {
        type: Number,
        require: true
    },
    z: {
        type: Number,
        requite: true
    },
    rotation: {
        type: Number,
        requite: true
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
