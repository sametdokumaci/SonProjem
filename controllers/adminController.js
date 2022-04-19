const Customer = require('../models/customerInfo')

const admin_index = (req, res) => {
    Customer.find()
        .then((result) => {
            console.log("selam")
            res.render('uyeler', { title: 'Uyeler', customerInfo: result })
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = {
    admin_index
}