var friendsArray = require("../data/friends");
module.exports = function(app) {
  app.get("/api/friends", function(req, res){
    res.send(friendsArray);
  })

  app.post("/api/friends", function(req, res){
    var newFriend = req.body;
    var newFriendScores = newFriend.scores;
    //Perform search for best friend and send best friend to call back function.
    var smallestIndex = 0;
    var compatibilityScoresArr = [];
    for(var i = 0; i < friendsArray.length; i++) {
      var friendScores = friendsArray[i].scores;
      var compatibilitySum = 0;
      for(var x = 0; x < friendScores.length; x++) {
        compatibilitySum += Math.abs(friendScores[x] - newFriendScores[x])
      }
      compatibilityScoresArr.push(compatibilitySum)
    }
    for(var i = 0; i < compatibilityScoresArr.length; i++) {
      if(compatibilityScoresArr[i] < compatibilityScoresArr[smallestIndex]) {
        smallestIndex = i;
      }
    }
    friendsArray.push(newFriend);
    res.send(friendsArray[smallestIndex]);
  })
}