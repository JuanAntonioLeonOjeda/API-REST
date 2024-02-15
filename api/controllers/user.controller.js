const User = require('../models/user.model')

const getAllUsers = async (req, res) => {
  try {
   const users = await User.findAll()

  //  if (!users) {
  //   res.status(401).send('No users found')
  //  }

   res.status(200).json({
     message: "Get users succesful",
     result: users,
   });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching all users",
      message: error,
    });
  }
}

const getUserById = async(req, res) => {
  try {
    const user = await User.findByPk(req.params.id)

    res.status(200).json({
      message: "Get user succesful",
      result: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching all users",
      message: error,
    });
  }
}

const createUser = async(req, res) => {
  try {
    const user = await User.create(req.body)

    res.status(200).json({
      message: 'User created',
      result: user
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error creating user',
      message: error
    })
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser
}