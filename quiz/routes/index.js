var express = require('express');
const { index } = require('../conroller/usercontroller');
var router = express.Router();
var multer = require('multer');
const { add, get } = require('../conroller/addcontroller');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

// router.post('/',upload.single('image'),index)

// addcontroller
router.post('/add',upload.single('image'),add)
router.get('/get',get)

module.exports = router;
