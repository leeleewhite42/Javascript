var express = require('express');
var router = express.Router();

// Something that works
// Rquest - http://localhost:3000/proto?attr=__proto__&value={"admin":"true"}
router.get('/', function(req, res, next) {
  const obj = Object.create(null)
  obj[req.query.attr] = JSON.parse(req.query.value)
  console.log(obj.__proto__)
  res.send("Yeah whatever")
});

// Something that might work?
router.get('/2', function(req, res, next) {
    const obj = Object.assign({}, JSON.parse(req.query.value))
    res.send("Yeah whatever")
  });

module.exports = router;
