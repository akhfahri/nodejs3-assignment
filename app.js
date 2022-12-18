let express = require('express')
let moment = require('moment')
let app = express()
let port = 3000

let models = require('./models/index')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world!')
})

function logUrl(req, res, next) {
    console.log('Request URL ', req.originalUrl)
    next()
}

app.get('/provinces', logUrl, (req, res) => {
    let findProvince = models.provinces.findAll().then(function(result) {
        if (result.length < 1) {
            res.json({message: "Data not available"})
        }
        
        res.json(result)
    })
})

app.get('/provinces/:id', (req, res) => {
    let findProvince = models.province.findOne({ where: {id: req.params.id} }).then(function(result) {
        if (result.length < 1) {
            res.json({message: "Data not available"})
        }
        
        res.json(result)
    })
})

app.post('/provinces', (req, res) => {
    let createProvince = models.provinces.create(req.body)
    if (!createProvince) {
        console.error('Error create user')
    }

    res.json(req.body)
})

app.get('/cities', logUrl, (req, res) => {
    let findCity = models.cities.findAll().then(function(result) {
        if (result.length < 1) {
            res.json({message: "Data not available"})
        }
        
        res.json(result)
    })
})

app.get('/cities/:id', (req, res) => {
    let findCity = models.cities.findOne({ where: {id: req.params.id} }).then(function(result) {
        if (result.length < 1) {
            res.json({message: "Data not available"})
        }
        
        res.json(result)
    })
})

app.post('/cities', (req, res) => {
    let createCity = models.cities.create(req.body)
    if (!createCity) {
        console.error('Error create user')
    }

    res.json(req.body)
})

app.listen(port, () => {
    console.log('Example app listen to port 3000')
})