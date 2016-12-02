var express = require('express');
var router = express.Router();
var ecard = require('../controller/ecard.controller');
var email = require('../controller/email.controller.js');
var app = express();

/*
Creating new ecard
*/

//router.param('currentEcardID', ecard.Get);
router.post('/',
    ecard.Create,
    email.send
);
router.get('/:getEcardByID',
    ecard.show
);
//router.post('/:currentEcardID', ecard.Get1);

router.param("getEcardByID",ecard.getByID);


module.exports = router;

