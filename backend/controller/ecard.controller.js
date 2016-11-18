/**
 * Created by Artur on 11/18/2016.
 */
var ecardModel = require('../models/ecard.model');


exports.Create = function(req,res, next) {
    var ecard = new ecardModel({
        creatorName: req.body.creatorName,
        receiverName: req.body.receiverName,
            email: req.body.email,
        objects: [
            {
                id: 'Image',
                x: 11,
                y: 100,
                z: 0,
                rotation: 0,
                scale: 0

            }
        ]

    });
    ecard.save(function (err, result) {
        if(!err){
            next();
        }
    })
};