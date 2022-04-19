const mongoose = require('mongoose')
const Schema = mongoose.Schema

const buildingsName = new Schema({
    buildingsNames: {
        type: String,
        requrie: true
    },
    buildingsBlok: {
        type: String,
        requrie: true
    },
    buildingsFlat: {
        type: String,
        require: true
    }
}, { timestamps: true })

const Buildings = mongoose.model('Buildings', buildingsName)
module.exports = Buildings