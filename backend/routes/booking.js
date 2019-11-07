var express = require("express");
var router = express.Router();
var sequelize = require("../models").sequelize;
var User = require("../models").User;
/* GET users listing. */
router.get("/getBookings", function(req, res, next) {
  const body = req.query;
  sequelize
    .query('SELECT * from bookings WHERE "userName"=:userName', {
      replacements: {
        userName: body.userName
      }
    })
    .then(bookings => {
      res.send(bookings);
    });
});

router.post("/createBooking", function(req, res, next) {
  console.log(req);
  const body = req.body;
  sequelize
    .query(
      'INSERT INTO bookings ("userName","trainNo","date") VALUES (:userName,:trainNo,:date)',
      {
        replacements: {
          userName: body.userName,
          trainNo: body.trainNo,
          date: body.date
        }
      }
    )
    .then(booking => {
      res.send(booking);
    });
});

module.exports = router;
