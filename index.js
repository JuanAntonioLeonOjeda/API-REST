require("dotenv").config()
const express = require("express")
const morgan = require("morgan")

const {
  checkDB,
  syncModels
} = require('./database/index')

const User = require('./api/models/user.model')
const Pet = require('./api/models/pet.model')

async function connectToDB() {
  await checkDB()
  await syncModels()
}

async function start() {
  await connectToDB()
  
  const app = express()

    app.use(express.json())

    app.use('/api', require('./api/routes/index'))

    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    })
}

start()

