var express = require("express");
var router = express.Router();

router.get("/plus", (req, res)=> {
  var input = req.query;
  var a = parseInt(input.a) || 0;
  var b = parseInt(input.b) || 0;
  var result = a - b;

  res.json({plus: 'plus = ' + result});
});

module.exports = router;
