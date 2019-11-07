"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("statuses", {
      trainNo: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      date: {
        type: Sequelize.DATE,
        primaryKey: true
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      available: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("statuses");
  }
};
