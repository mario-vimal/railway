"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("trains", {
      trainNo: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      trainName: {
        type: Sequelize.STRING
      },
      arrivalTime: {
        type: Sequelize.STRING
      },
      departureTime: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("trains");
  }
};
