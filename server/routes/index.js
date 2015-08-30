var express = require('express');
var router = express.Router();
var models = require('../models/items');
var logic = require('../utilities/logic');

var numUsers = 0;

var submitsArray = models.submitsArray;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Github Contest' });
});


router.post('/createSub', function(req, res){
  if (submitsArray.length===8){
    res.render('index',
      { message: 'No more entries allowed',
        // submitsArray: submitsArray
    });
  } else {
    var newEntry = new models.Submission(req.body.name, req.body.url, req.body.img);
    submitsArray.push(newEntry);
    numUsers += 1;
   //!!!!!No slash on index!  It's knows its the html page!  AARARRRGGHHH!!!!
    res.render('index', {
      //numberOfUsers: "test",
      numUsers: numUsers
    });
  }
});

var contestantsA = [];
var contestantsB = [];
//when user clicks the button with the /begin action, go the the votes page to see the submissions and vote on them
router.post('/begin', function(req, res){
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

//increments votes for the A side
router.post('/voteA/:id', function(req, res){
  //This is able to grab the id.
  console.log(req.params, "req.params");
  for (var i = 0; i < contestantsA.length; i++) {
    if(contestantsA[i].id === req.params.id) {
      console.log(contestantsA[i].votes, "pre-add");
      console.log(contestantsA[i].votes += 1, "postadd");
    } else {
      console.log("epic boo");
    }
  }
});


//increments votes for the B side
router.post('/voteB/:id', function(req, res){
  //This is able to grab the id.
  console.log(req.params, "req.params");
  for (var i = 0; i < contestantsB.length; i++) {
    if(contestantsB[i].id === req.params.id) {
      console.log(contestantsB[i].votes, "pre-add");
      console.log(contestantsB[i].votes += 1, "postadd");
    } else {
      console.log("epic boo");
    }
  }
});


module.exports = router;
