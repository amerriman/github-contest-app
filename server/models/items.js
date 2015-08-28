function Submissions(){
  this.submitArray = [];
}

Submissions.prototype.addSubmission = function(githubName, githubURL, githubImage){
  var newSubmission = {
    githubName: githubName,
    githubURL: githubURL,
    githubImage:githubImage
  };
  this.submitArray.push(newSubmission);
};

var submits = new Submissions();

module.exports = submits;
