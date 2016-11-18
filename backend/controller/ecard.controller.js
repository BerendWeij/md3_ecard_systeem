/**
 * Created by Artur on 11/18/2016.
 */
var ecardModel = require('../models/ecard.model');


exports.Create = function(req,res, next) {
    var ecard = new ecardModel({
        creatorName: 'Artur',
        receiverName: 'Tristan',
        email: 'arturkupczak@outlook.com',
        objects: [
            {   name: 'Image',
                x: 11,
                y: 100
            }
        ]

    });
    ecard.save(function (err, result) {
        if(!err){
            console.log('Gelukt');
            next();
        }
    })
};