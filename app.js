const { resume } = require('browser-sync')
const express = require('express')
const { redirect } = require('express/lib/response')
const { default: mongoose } = require('mongoose')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const Customer = require('./models/customerInfo')
const buildingsName = require('./models/buildingsName')
const adminRoutes = require('./routes/adminRoutes')
const userRoutes = require('./routes/userRoutes')
const { $where } = require('./models/customerInfo')




const app = express()

app.set('view engine', 'ejs')
const port = process.env.PORT || 5000;
const dbURL = 'mongodb+srv://sametdokumaci:5468615000s@deneme.llwy6.mongodb.net/deneme-blog?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result => app.listen(port)))
    .catch((err) => console.log(err))

app.set('view engine', 'ejs')
app.use(express.static('images'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cookieParser())


app.use(adminRoutes)
app.use(userRoutes)

app.get('/', (req, res) => {
    res.render('index', { title: 'Anasayfa' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'Hakkımızda' })
})
app.get('/about-us', (req, res) => {
    res.render('about', { title: 'Hakkımızda' })
})
app.use((req, res) => {
    res.status(404).render('404', { title: 'Sayfa Bulunamadı' })
})