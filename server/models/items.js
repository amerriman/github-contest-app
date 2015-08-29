//set a unique id for each user here
function Submissions(){
  this.submitArray = [];
}

Submissions.prototype.addSubmission = function(githubName, githubURL, githubImage){
  var newSubmission = {
    githubName: githubName,
    githubURL: githubURL,
    githubImage:githubImage,
    id: githubURL,
    votes: 0
  };
  this.submitArray.push(newSubmission);
};

var submits = new Submissions();

module.exports = submits;
