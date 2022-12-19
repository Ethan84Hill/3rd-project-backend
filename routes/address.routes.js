const express = require('express');
const router = express.Router();
const Address = require('../models/Address.model')
const Order = require('../models/Order.model')
const { isAuthenticated } = require('../middleware/jwt.middleware');


router.post('/checkout', isAuthenticated, (req, res, next) => {
    console.log(req.body.cartArray)
    Address.create({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        userId: req.payload._id
    })
    .then(createdAddress => {
         Order.create({
            address: createdAddress._id,
            dateOfOrder: req.body.dateOfOrder,
            total: req.body.total,
            products: req.body.cartArray.map( el => {
                return {productId: el.product._id, 
                purchaseQuantity: el.quantity}
            }),
            userId: req.payload._id
        })
    })
    .then(orderCreated => {
        console.log(orderCreated)
        res.json(orderCreated)
    })
    .catch(err => console.log(err))
})








module.exports = router