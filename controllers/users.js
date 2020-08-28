const User = require('../models/user');

module.exports = {
  index,
  showGoals
  
}

function showGoals(req, res) {
  res.redirect('/users/goals', {title: 'Goals'})
}

function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', { title: 'Home', user: req.user, users })
  })
}