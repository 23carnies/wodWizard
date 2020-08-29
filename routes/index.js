const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('index', {title: 'Home', user: req.user ? req.user : null})
})

module.exports = router