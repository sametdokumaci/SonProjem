const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')
const Customer = require('../models/customerInfo')
const Buildings = require('../models/buildingsName')
const deneme = ""


router.get('/admin', adminController.admin_index)


router.get('/admin/add', (req, res) => {
    res.render('add', { title: 'Yeni Uye' })
})

router.post('/admin/add', (req, res) => {
    console.log(req.body)

    const customer = new Customer(req.body)

    customer.save()
        .then((result) => {
            res.redirect('/admin')
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/admin/addBuildings', (req, res) => {
    res.render('addBuildings', {title: 'Yeni Site'})
})

router.post('/admin/addBuildings', (req, res) => {
    console.log(req.body)

    const buildings = new Buildings(req.body)

    buildings.save()
        .then((result) => {
            res.redirect('/admin')
        })
        .catch((err) => {
            console.log(err)
        })
})


router.post('/admin/siteler', (req, res) => {
    Buildings.find()
        .then((result) => {
            console.log("buildings selam")
            res.json({ buildingsName: result })
        })
        .catch((err) => {
            console.log(err)
        })
})

router.post('/admin',(req,res) =>{

    Customer.find()
        .then((result) => {
            res.json({ customerInfo: result })
        })
        .catch((err) => {
            console.log(err)
        })
})

router.delete('/admin/delete/:id', (req, res) => {
    const id = req.params.id
    Customer.findByIdAndDelete(id)
        .then((result) => {
            res.json({ link: '/admin' })
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router