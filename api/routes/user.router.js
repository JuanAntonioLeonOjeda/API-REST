const router = require("express").Router()

const { 
  createUser, 
  getUserById,
  getAllUsers 
} = require("../controllers/user.controller")

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)

module.exports = router;
