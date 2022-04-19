const mongoose = require('mongoose')
const Schema = mongoose.Schema
const customerInfo = new Schema({
    customerId: {
        type: String,
        requrie: true
    },
    adSoyad: {
        type: String,
        requrie: true
    },
    daire: {
        type: String,
        require: true
    },
    site: {
        type: String,
        require: true
    },
    blog: {
        type: String,
        require: true
    }
}, { timestamps: true })

const Customer = mongoose.model('Customer', customerInfo)
module.exports = Customer