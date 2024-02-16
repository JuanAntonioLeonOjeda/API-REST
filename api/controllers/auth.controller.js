const User = require("../models/user.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const signup = async (req, res) => {
  try {

    const password = req.body.password
    const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
    const hashedPassword = bcrypt.hashSync(password, saltRounds)

    req.body.password = hashedPassword
    const user = await User.create(req.body);

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: "Signup succesful",
      result: token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in signup",
      message: error,
    });
  }
}

const login = async(req, res) => {
  try {
    const email = req.body.email

    const user = await User.findOne({where: { email: email }})
    
    if (!user) {
      return res.status(404).send('Email or password incorrect')
    }

    const comparePass = bcrypt.compareSync(req.body.password, user.password)

    if (!comparePass) {
      return res.status(404).send("Email or password incorrect");
    }
    
    const token = jwt.sign({email: email}, process.env.JWT_SECRET, { expiresIn: '1h' })
    res.status(200).json({
      message: "Login succesful",
      result: token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in login",
      message: error,
    });
  }
}

module.exports = {
  signup,
  login
}