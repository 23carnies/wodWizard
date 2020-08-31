const User = require('../models/user')


module.exports = {
    new: newGoal,
    create
}

function create(req, res) {
    console.log(req.body)
        req.user.goals.push(req.body)
        req.user.save().then(function(err, goal) {
            res.render('goals/new', {
                title: 'Goals', 
                user: req.user,
                goals: req.body
        })
    })
}



function newGoal(req,res) {
    res.render('goals/new', {
        title: 'Goals',
        user: req.user
    })
}