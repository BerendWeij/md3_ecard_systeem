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
        if(!err) {
            res.status(201).json({Type: 'Success', Message: 'New ecard created'}).end();
        }else{
            res.status(500).json({ Type: 'Error', Message: 'Error while creating' }).end();
            console.log(err);
        }
    })
};

exports.show = function (req,res,next) {
    res.status(201).json(req.ecardResult);
}

exports.getByID = function (req, res,next,idGiven) {
    ecardModel.findOne( {'_id' : idGiven }, function(err, ecard){
        if(!err){
            console.log(ecard);

            req.ecardResult = ecard;
            next();
        }else{
            console.log(ecard);
        }
        // Will show your array of Menu Categories
        // No further queries required
    });
};