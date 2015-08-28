var express = require('express');
var router = express.Router();
var submits = require('../models/items');


var submitsArray = submits.submitArray;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Oh hey, shit should be happening here' });
});


router.post('/index', function(req, res){
  if (submits.submitArray.length===8){
    res.render('index',
      { message: 'No more entries allowed',
        // submitsArray: submitsArray
    });
  } else {
  var newSubmission = submits.addSubmission(req.body.name, req.body.url, req.body.img);
   //!!!!!No slash on index!  It's knows its the html page!  AARARRRGGHHH!!!!
    res.render('index', {
      numberOfUsers: "test"
    });
  }
});

router.post('/vote', function(req, res){
  //if(submits.submitArray[i] % 2)
  res.render('vote',
    { submitsArray: submitsArray
    });
});


module.exports = router;
