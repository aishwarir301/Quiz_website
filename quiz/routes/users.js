var express = require('express');
const { user } = require('../conroller/usercontroller');
var router = express.Router();

/* GET users listing. */
router.post('/useradd',user)

module.exports = router;
