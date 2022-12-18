const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        default: 0
        // required: true,
        // min: [1, 'Quantity can not be less then 1.']
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true,
    }
},
    {
        timestamps: true
})



const cartSchema = new Schema({
    products: [itemSchema],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    total: {
        default: 0,
        type: Number
    },
    __v: { type: Number, select: false }
}, {
    timestamps: true
})



const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart;