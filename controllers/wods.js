const User = require('../models/user')
const Wods = require('../models/wods')
const Movement = require('../models/movement')

module.exports = {
    index
}

function index(req, res) {
    res.render('wods/index', {title: 'WOD', 
        user: req.user})
}