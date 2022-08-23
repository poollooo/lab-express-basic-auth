const router = require('express').Router()
const Message = require('../models/Message.model.js')
const mongoose = require('mongoose')

router.get('/', (req, res, next) => {
    console.log(__dirname)
    const file = '/Users/pnizet/ironhack/5-week/2-day/lab-express-basic-auth/images/giphy.gif'
    res.sendFile(file)
})

module.exports = router