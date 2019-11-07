var express = require("express");
var router = express.Router();
var sequelize = require("../models").sequelize;
var User = require("../models").Train;
/* GET users listing. */
router.get("/getTrains", function(req, res, next) {
  sequelize.query("SELECT * FROM trains").then(train => {
    res.send(train[0]);
  });
});

module.exports = router;
