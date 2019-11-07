var express = require("express");
var router = express.Router();
var sequelize = require("../models").sequelize;
var User = require("../models").User;
/* GET users listing. */
router.get("/getUser", function(req, res, next) {
  const body = req.body;
  sequelize
    .query('SELECT * FROM users where "userName" = :userName', {
      replacements: { userName: body.userName },
      type: sequelize.QueryTypes.SELECT
    })
    .then(user => {
      res.send(user[0]);
    });
});

router.post("/createUser", function(req, res, next) {
  console.log(req);
  sequelize.query().then(user => {
    res.send({});
  });
});

module.exports = router;
