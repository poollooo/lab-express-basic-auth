const router = require('express').Router()
const { isAuthenticated } = require('../middleware/middlewares')

router.get('/',
    isAuthenticated,
    async (req, res, next) => {
        const file = '/Users/pnizet/ironhack/5-week/2-day/lab-express-basic-auth/images/giphy.gif'
        res.send('You are authenticated ! Congrats !')
        res.sendFile(file)
    })

module.exports = router