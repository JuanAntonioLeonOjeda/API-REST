const { Sequelize } = require("sequelize")

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  logging: false
})

const checkDB = async () => {
  try {
    await connection.authenticate()
    console.log("Connected to DB");
  } catch (error) {
    throw new Error(error)
  }
}

const syncModels = async () => {
  try {
    await connection.sync()
    console.log('Models synchronized')
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  connection,
  checkDB,
  syncModels
}