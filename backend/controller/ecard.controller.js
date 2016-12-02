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
                id: req.body.id,
                x: req.body.x,
                y: req.body.y,
                z: req.body.z,
                rotation: req.body.rotation,
                scale: req.body.scale
            }
        ]

    });
    ecard.save(function (err, result) {
        if(!err)
            res.status(201).json({ Type: 'Success', Message: 'New ecard created' }).end();
        else{
            res.status(500).json({ Type: 'Error', Message: 'Error while creating' }).end();
            console.log(err);
        }
    })
};
exports.Get = function (req, res,next, ecard_id) {

};
exports.Get1 = function (req, res) {

};