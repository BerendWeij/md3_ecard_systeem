var express = require('express');
var router = express.Router();
var ecard = require('../controller/ecard.controller');
var email = require('../controller/email.controller.js');

/*
Creating new ecard
*/

//router.param('currentEcardID', ecard.Get);
router.post('/',
    ecard.Create,
    email.send
);
//router.post('/:currentEcardID', ecard.Get1);

module.exports = router;

