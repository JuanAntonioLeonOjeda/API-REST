const { DataTypes } = require("sequelize");
const { connection } = require('../../database/index')

const User = connection.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    age: {
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps: false
  }
)

module.exports = User
