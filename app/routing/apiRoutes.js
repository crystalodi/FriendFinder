var friendsArray = require("../data/friends");
module.exports = function(app) {
  app.get("/api/friends", function(req, res){
    res.send(friendsArray);
  })

  app.post("/api/friends", function(req, res){
    var newFriend = req.body;
    friendsArray.push(newFriend);
    res.send(true);
  })
}