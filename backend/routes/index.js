var express = require("express");
var router = express.Router();

const userRoute = require("./user");
const trainRoute = require("./train");
const bookingRoute = require("./booking");
const statusRoute = require("./status");

router.use("/user", userRoute);
router.use("/train", trainRoute);
router.use("/booking", bookingRoute);
router.use("/status", statusRoute);

module.exports = router;
