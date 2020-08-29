const User = require('../models/user')
const Wod = require('../models/wod')
const Movement = require('../models/movement')

module.exports = {
    index,
    new: newWod,
    create
}

function create(req, res) {
    Movement.find({}, (err, movements) => {
        res.render('wods/new', {
            title: 'Add Wod',
            user: req.user,
            movements
        })
    })
}

function newWod(req, res) {
    Movement.find({}, (err, movements) => {
        res.render('wods/new', {
            title: 'Add Wod',
            user: req.user,
            movements
        })
    })
}


function index(req, res) {
    res.render('wods/index', {title: 'WOD', 
        user: req.user})
}