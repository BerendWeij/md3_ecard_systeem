var express = require('express');
var router = express.Router();
var ecard = require('../controller/ecard.controller');
<<<<<<< HEAD
var email = require('../controller/email.controller');
=======
var email = require('../controller/email.controller.js');
var app = express();
>>>>>>> origin/Backend

/*
Creating new ecard
*/

//router.param('currentEcardID', ecard.Get);
router.post('/',
    ecard.Create,
    email.send
);
<<<<<<< HEAD


=======
router.get('/:getEcardByID',
    ecard.show
);
>>>>>>> origin/Backend
//router.post('/:currentEcardID', ecard.Get1);

router.param("getEcardByID",ecard.getByID);


module.exports = router;

