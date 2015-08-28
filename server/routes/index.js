var express = require('express');
var router = express.Router();
var submits = require('../models/items');


var submitsArray = submits.submitArray;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Oh hey, shit should be happening here' });
});


router.post('/vote', function(req, res){
  if (submits.submitArray.length===8){
    res.json(
      { message: "No more entries allowed",
      itemList: stubmits.submitArray
    });
  } else {
  var newSubmission = submits.addSubmission(req.body.name, req.body.url, req.body.img);
   //!!!!!No slash on vote!  It's knows its the html page!  AARARRRGGHHH!!!!
   res.render('vote',
    { submitsArray: submitsArray
    });
  }
});


module.exports = router;
