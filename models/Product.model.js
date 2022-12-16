const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    img: String,
    name: String,
    dimensions: String,
    price: Number
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;