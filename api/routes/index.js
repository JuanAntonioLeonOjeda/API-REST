const router = require('express').Router()

const authRouter = require('./auth.router')
const userRouter= require('./user.router')
const petRouter = require('./pet.router')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/pet', petRouter)

module.exports = router