'use strict';
module.exports = (sequelize, DataTypes) => {
  const train = sequelize.define('train', {
    trainNo: DataTypes.INTEGER,
    trainName: DataTypes.STRING,
    arrivalTime: DataTypes.DATE,
    departureTime: DataTypes.DATE
  }, {});
  train.associate = function(models) {
    // associations can be defined here
  };
  return train;
};