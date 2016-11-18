var express = require('express');
var router = express.Router();
var ecard = require('../controller/ecard.controller');

/* GET home page. */
router.get('/', ecard.test);

module.exports = router;


