//importing data and manip. tables. in controller, working with model 

var path = require("path");
var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/data/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/data/friends", function(req, res) {

    /** logic example 
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } */
  
  });
}