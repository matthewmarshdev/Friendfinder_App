//importing data and manip. tables. in controller, working with model 

var path = require("path");

//class ex say modules.exports=function

//lookup express.router instead to use in lieu of. this will help get routes to connect that are in different folders.

var friendData = require("../data/friendData");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {

    /** logic example 
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } */
  
  });
