const router = require('express').Router()
const usersRouter = require('./users.routes')
const authRouter = require('./auth.routes')
const mainRouter = require('./main.routes')
const privateRouter = require('./private.routes')
/* GET home page */

// router.use('/', consoleLogger)
router.get('/', consoleLogger, (req, res, next) => {
  console.log(req.students)
  res.json({ message: 'Everything is fine so far!' })
})


function consoleLogger(req, res, next) {
  req.students = ['Agash', 'Julien']
  next()
}


router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/main', mainRouter)
router.use('/private', privateRouter)


module.exports = router
