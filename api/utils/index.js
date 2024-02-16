const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      return res.status(401).send('Token not found')
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, result) => {
      if (err) {
        return res.status(401).send("Token invalid");
      }

      const user = await User.findOne({where: {email: result.email}})

        if (!user) {
          return res.status(401).send("Token invalid");
        }

        res.locals.user = user
        next()
    })
  } catch (error) {
    res.status(500).json({
      message: "Token invalid",
      message: error,
    });
  }
}

const checkAdmin = (req, res, next) => {
  if (res.locals.user.role !== 'admin') {
    return res.status(401).send("User not authorized");
  } 
  next()
}

module.exports = {
  checkAuth,
  checkAdmin
}