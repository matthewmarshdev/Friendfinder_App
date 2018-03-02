//importing data and manip. tables. in controller, working with model 

var path = require("path");
var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
     console.log(req.body["scores[]"]);
    /** logic example 
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } */
  
  });
}