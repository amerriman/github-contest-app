var express = require('express');
var router = express.Router();
var submits = require('../models/items');
var logic = require('../utilities/logic');

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
      //numberOfUsers: "test",
      numUsers: numUsers
    });
  }
});

//go the the votes page to see the submissions and vote on them
router.post('/vote', function(req, res){
  var contestantsA = [];
  var contestantsB = [];
  for (var i = 0; i < submitsArray.length; i++) {
    if (i % 2 === 0){
      contestantsA.push(submitsArray[i]);
    }
    else {
      contestantsB.push(submitsArray[i]);
    }
  }
  res.render('vote',
    { contestantsA: contestantsA,
      contestantsB: contestantsB
    });
});



module.exports = router;
