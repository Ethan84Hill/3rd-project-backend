const express = require('express');
const router = express.Router();
const { } = require('../controllers/cart.controllers')



router.delete('/products/:productId', deleteProduct)

module.exports = router