var express = require('express');
var router = express.Router();
const Ftth = require('../model/ftth_model')
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/* GET ftth customers */
//View User Data
router.get('/', function (req, res) {

    Ftth.find({}, (err, data) => {
      if (err) {
        res.send(`${err}`);
      }
      res.send(`${data}`)
    })
  })

module.exports = router;