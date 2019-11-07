var Train = require("./train");
("use strict");
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define(
    "booking",
    {
      userName: DataTypes.STRING,
      trainNo: DataTypes.INTEGER,
      date: DataTypes.DATE
    },
    {}
  );
  booking.associate = function(models) {
    // associations can be defined here
    
  };
  return booking;
};
