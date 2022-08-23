const jsonWebToken = require('jsonwebtoken')
const User = require('../models/User.model')

// const isAuthenticated = async (req, res, next) => {
//     const token = req.headers.authorization
//     if (!token) {
//         return res.status(401).json({ message: 'You are not authorized token' })
//     }
//     try {
//         const decoded = jsonWebToken.verify(token, process.env.JWT_SECRET)
//         const user = await User.findById(decoded.id)
//         if (!user) {
//             return res.status(401).json({ message: 'You are not authorized user' })
//         }
//         req.user = user
//         next()
//     } catch (error) {

//     }
// }

const isAuthenticated = async (req, res, next) => {
    let token = req.headers.authorization
    if (!token) {
        return res.status(400).json({ message: 'No token found!' })
    }
    token = token.replace('Bearer ', '')
    const userToken = jsonWebToken.verify(token, process.env.TOKEN_SECRET)
    console.log(userToken)
    try {
        const user = await User.findOne({ username: userToken.username })
        if (!user) {
            return res.status(400).json({ message: 'Invalid token' })
        }
        req.user = user
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' })
    }
    // Once everything went well, go to the next middleware
    next()
}

const isAdmin = (req, res, next) => {
    if (req.user.role === 'admin') {
        next()
    } else {
        return res.status(401).json({ message: 'You are not authorized' })
    }
}

module.exports = { isAuthenticated, isAdmin }
