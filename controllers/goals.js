const User = require('../models/user')



module.exports = {
    new: newGoal,
    create,
    index,
    update,
    delete: deleteGoal
}


function deleteGoal(req, res) {
    let idx = req.user.goals.findIndex((goal) => goal.id === req.params.id)
    req.user.goals.splice(idx, 1)
        req.user.save().then(() => {
            res.redirect('/users/profile')
        })
}

function update(req,res) {
    User.findById(req.user._id)
    .then((user) => {
        user.goals.complete = req.body.complete === 'on'
        user.save().then(() => {
            setTimeout(function(){res.redirect('/users/profile')}, 4000)
        })
    })
}

function index(req, res) {
    Goal.find({}, (err, goals) => {
        goals.sort((a, b) => (a.goalDate > b.goalDate) ? -1 : 1)
        res.render('goals/index', {
            title: 'Goals List', 
            goals
        })
    })
}

function create(req, res) {
    req.body.complete = !!req.body.complete
        req.user.goals.push(req.body)
        req.user.save().then(function(err, goal) {
            res.render('goals/new', {
                title: 'Goals', 
                user: req.user,
                goal: req.body
        })
    })
}

function newGoal(req,res) {
    res.render('goals/new', {
        title: 'Goals',
        user: req.user
    })
}