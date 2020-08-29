const Movement = require('../models/movement')
const Wod = require('../models/wod')
const User = require('../models/user')

module.exports = {
    new: newMovement, 
    create
}

function create(req, res) {
    Movement.create(req.body)
    .then(movement => {
        res.render('movements/new', {
            title: 'Add Movement',
            user: req.user
        })
    })
}


function newMovement(req, res) {
    Movement.find({}, (err, movements) => {
        res.render('movements/new', {
            title: 'Add Movement',
            user: req.user
        })
    })
}