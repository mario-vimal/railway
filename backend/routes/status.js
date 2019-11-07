var express = require("express");
var router = express.Router();
var sequelize = require("../models").sequelize;
var User = require("../models").User;
/* GET users listing. */
router.get("/getStatus", function(req, res, next) {
  console.log(req.query);
  const body = req.query;
  sequelize
    .query('SELECT * FROM statuses WHERE "trainNo"=:trainNo AND "date"=:date', {
      replacements: {
        trainNo: parseInt(body.trainNo),
        date: body.date
      }
    })
    .then(status => {
      console.log(status[0].length);
      if (status[0].length === 0) {
        sequelize
          .query("INSERT INTO statuses VALUES (:trainNo,:date,1000,1000)", {
            replacements: {
              trainNo: parseInt(body.trainNo),
              date: body.date
            }
          })
          .then(status => {
            res.send(status[0]);
          });
      }
      res.send(status[0]);
    });
});

router.post("/updateStatus", function(req, res, next) {
  const body = req.body;
  sequelize
    .query(
      'SELECT available FROM statuses WHERE "trainNo"=:trainNo AND date=:date',
      {
        replacements: {
          trainNo: body.trainNo,
          date: body.date
        }
      }
    )
    .then(status => {
      const available = parseInt(status[0][0].available);
      console.log(status[0][0].available);
      const newAvailable = available - 1;
      sequelize
        .query(
          'UPDATE statuses SET available=:newAvailable WHERE "trainNo"=:trainNo AND date=:date',
          {
            replacements: {
              trainNo: body.trainNo,
              date: body.date,
              newAvailable: newAvailable
            }
          }
        )
        .then(status => {
          res.send(status);
        });
    });
});

module.exports = router;
