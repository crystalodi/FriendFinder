var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var port = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app, path);

app.listen(port, function(){
  console.log("Listening on port " + port);
})

