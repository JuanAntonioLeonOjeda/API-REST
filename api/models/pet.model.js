const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Pet = connection.define(
  "pet",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Pet;
