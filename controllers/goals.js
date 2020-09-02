const User = require('../models/user')
const { findByIdAndDelete } = require('../models/user')


module.exports = {
    new: newGoal,
    create,
    delete: deleteGoal
}

function deleteGoal(req, res) {
    Goal.findByIdAndDelete(req.body)
    console.log(req.body)
    res.redirect('/users/profile')
}


function create(req, res) {
    req.body.complete = !!req.body.complete
    for(let key in req.body)
        if(req.body[key] === '') delete req.body[key]
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