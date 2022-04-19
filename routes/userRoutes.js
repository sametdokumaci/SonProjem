const express = require('express')
const { modelName } = require('../models/customerInfo')
const router = express.Router()
const Customer = require('../models/customerInfo')

router.get('/uyeler/:id', (req, res) => {
    const id = req.params.id

    Customer.findById(id)
        .then((result) => {
            res.render('user_detail', { customerInfo: result, title: 'Üye Detay' })
        })
})

module.exports = router