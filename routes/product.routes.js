const express = require('express');
const router = express.Router();
const {createProduct, 
    getCreatedProducts, 
    getProductId, 
    putProductId, 
    deleteProduct} = require('../controllers/product.controllers')

router.post('/products/add', createProduct)

router.get('/products', getCreatedProducts)

router.get('/products/:productId', getProductId)




router.put('/products/:productId', putProductId)





router.delete('/products/:productId', deleteProduct)

module.exports = router