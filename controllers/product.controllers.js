const Product = require('../models/Product.model')


const createProduct = (req, res, next) => {
    console.log(req.body)
    Product.create({
        img: req.body.img,
        name: req.body.name,
        dimensions: req.body.dimensions,
        price: req.body.price
    })
        .then(createdProduct => {
            res.send(createdProduct)
        })
        .catch(err => res.send(err))
}

const getCreatedProducts = (req, res, next) => {
    Product.find()
    .then(foundProductsArray => {
        res.send(foundProductsArray)
    })
    .catch(err => res.send(err))
}

const getProductId = (req, res, next) => {
    Product.findById(req.params.productId)
    .then(foundProduct => {
        res.send(foundProduct)
    })
    .catch(err => res.send(err))
}

const putProductId = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.productId, {
        img: req.body.img,
        name: req.body.name,
        dimensions: req.body.dimensions,
        price: req.body.price
    }, { new: true })
    .then(updatedProduct => {
        res.send(updatedProduct)
    })
    .catch(err => res.send(err))
}

const deleteProduct = (req, res, next) => {
    console.log('these are the params', req.params)
    Product.findByIdAndDelete(req.params.productId)
    .then(deletedProduct => {
        res.send(deletedProduct)
    })
    .catch(err => res.send(err))
}


module.exports = {
    createProduct,
    getCreatedProducts,
    getProductId,
    putProductId,
    deleteProduct
}