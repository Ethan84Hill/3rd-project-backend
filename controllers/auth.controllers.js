const bcryptjs = require('bcryptjs')
const User = require('../models/User.model')
const jwt = require('jsonwebtoken')

const signupController = (req, res, next) => {
    if(!req.body.email || !req.body.password || !req.body.name) {
        return res.status(400).json({
            error: {
                message: 'Missing email, name, or password'
            }
        })
    }

    bcryptjs.hash(req.body.password, 10)
    .then(hashedPassword => {
        return User.create({
            email: req.body.email,
            name: req.body.name, 
            password: hashedPassword
        })

    })
    .then(createdUser => {
        return res.send(createdUser)
    })
    .catch(err => res.send(err))
}


const loginController = (req, res, next) => {
    const { email, password } = req.body

    if(!email || !password) {
       return res.json({
        error: {
            message: 'missing email or password'
        }
       })
    }
    
    let myUser;

    User.findOne({ email: email })
        .then(foundUser => {
            if(!foundUser) {
              return  Promise.reject('invalid email or password')
            }
            myUser = foundUser
            return bcryptjs.compare(password, foundUser.password)
        })
        .then(isValidPassword => {
            if(!isValidPassword) {
                return Promise.reject('invalid email or password')
            }

            const payload = {
                _id: myUser._id,
                name: myUser.name,
                email: myUser.email
            }

            const authToken = jwt.sign(
                payload,
                process.env.TOKEN_SECRET,
                { algorithm: 'HS256', expiresIn: '6h' }
            )
                res.json({
                    authToken: authToken
                })
            
        })
        .catch(err => res.send(err))

}


module.exports = {
    signupController,
    loginController
}