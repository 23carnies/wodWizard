const router = require('express').Router()
const axios = require('axios')




router.get('/', (req, res) => {
    axios.get('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
    .then(response => {
        console.log(response.data)
        res.render('index', {title: 'Home', user: req.user ? req.user : null, quoteData: response.data
        })
    })
    .catch(error => {
        console.log(error)
    })
})

module.exports = router