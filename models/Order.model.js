const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: "Address"
    },
    dateOfOrder: Number,
    total: Number,
    products: [{ 
        productId: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    }, 
    purchaseQuantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    }
    }],
    
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order

