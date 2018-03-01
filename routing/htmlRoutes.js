//here is where i require path. doesnt need to be top level. 
var path = require("path");

var friendData = require("../data/friendData");

module.exports = function(app) {

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}
