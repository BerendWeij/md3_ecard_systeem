var express = require('express');
var router = express.Router();
var ecard = require('../controller/ecard.controller');
var email = require('../controller/email.controller.js');

/*
Creating new ecard
*/
router.get('/',
    ecard.Create,
    email.send
);

module.exports = router;

