var express = require('express');
var router = express.Router();


router.get('/',require('./login'))


module.exports = router;
