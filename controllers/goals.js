const User = require('../models/user')


module.exports = {
    new: newGoal,
    create
}

function create(req, res) {
    console.log(req.body)
    if(req.body.complete === '') {
        req.body.arrival = new Date(new Date().setMonth(new Date().getMonth() + 3))
        req.user.goals.push(req.body)
        req.user.save().then(function(err, goal) {
            res.render('goals/new', {
                title: 'Goals', 
                user: req.user,
                goal
            })
        })
    }
}


function newGoal(req,res) {
    res.render('goals/new', {
        title: 'Goals',
        user: req.user
    })
}