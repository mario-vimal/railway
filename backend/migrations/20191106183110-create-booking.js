"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("bookings", {
      userName: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      trainNo: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      date: {
        type: Sequelize.DATE,
        primaryKey: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("bookings");
  }
};
