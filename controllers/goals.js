const Movement = require('../models/movement')
const Wod = require('../models/wod')
const User = require('../models/user')
const user = require('../models/user')

module.exports = {
    new: newGoal,
    create
}

function create(req, res) {
    Goal.create(req.body) 
    .then(goal => {
        res.redirect('/goals', {
            title: 'Profile', 
            user: req.user,
            goal
        })
    })
}

function newGoal(req,res) {
    res.render('goals/new', {
        title: 'Goals',
        user: req.user
    })
}