var express = require('express');
var router = express.Router();
var submits = require('../models/items');

var numUsers = 0;

var submitsArray = submits.submitArray;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Github Contest' });
});


router.post('/index', function(req, res){
  if (submits.submitArray.length===8){
    res.render('index',
      { message: 'No more entries allowed',
        // submitsArray: submitsArray
    });
  } else {
  var newSubmission = submits.addSubmission(req.body.name, req.body.url, req.body.img);
    numUsers += 1;
   //!!!!!No slash on index!  It's knows its the html page!  AARARRRGGHHH!!!!
    res.render('index', {
      numberOfUsers: "test",
      numUsers: numUsers
    });
  }
});

//go the the votes page to see the submissions and vote on them
router.post('/vote', function(req, res){
  //if(submits.submitArray[i] % 2)
  res.render('vote',
    { submitsArray: submitsArray
    });
});


module.exports = router;
