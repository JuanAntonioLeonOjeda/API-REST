const router = require("express").Router()

const { 
  createUser, 
  getUserById,
  getAllUsers 
} = require("../controllers/user.controller")

const {
  checkAuth,
  checkAdmin
} = require('../utils/index')

router.get('/', checkAuth, getAllUsers)
router.get('/:id', checkAuth, checkAdmin, getUserById)
router.post('/', createUser)

module.exports = router;
