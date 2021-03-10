var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const obj = Object.create(null)
  obj[req.query.attr] = req.query.value;
  console.log(obj.__proto__)
  res.send("Yeah whatever")
});

module.exports = router;
