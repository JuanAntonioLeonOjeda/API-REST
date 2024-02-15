const router = require('express').Router()

const userRouter= require('./user.router')
const petRouter = require('./pet.router')

router.use('/user', userRouter)
router.use('/pet', petRouter)

module.exports = router