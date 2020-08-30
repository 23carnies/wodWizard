const User = require('../models/user')
const Wod = require('../models/wod')
const Movement = require('../models/movement')
const wod = require('../models/wod')

module.exports = {
    index,
    new: newWod,
    create
}

function create(req, res) {
    req.body.createdBy = req.user.name
    req.body.avatar = req.user.avatar
    Wod.create(req.body) 
    .then(wod => {
        res.render('wods/new', {
            title: 'Add Wod',
            user: req.user
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