var Train = require("./train");
("use strict");
module.exports = (sequelize, DataTypes) => {
  const status = sequelize.define(
    "status",
    {
      trainNo: {
        type: DataTypes.INTEGER,
        references: {
          model: Train,
          key: "trainNo"
        }
      },
      date: DataTypes.DATE,
      capacity: DataTypes.INTEGER,
      available: DataTypes.INTEGER
    },
    {}
  );
  status.associate = function(models) {
    status.belongsTo(models.train, { foreignKey: "trainNo" });
    // associations can be defined here
  };
  return status;
};
