const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addressSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    address: String,
    altAddress: String,
    name: String,
    phoneNumber: Number,
    city: String,
    state: String,
    zipcode: Number,
    email: String
})






const Address = mongoose.model('Address', addressSchema)

module.exports = Address;