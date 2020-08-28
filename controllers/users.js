const User = require('../models/user');

module.exports = {
  index,
  createWod
  
}

function createWod(req, res) {
  res.redirect('/users/createWod', {title: 'Create Wod'})
}

function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', { title: 'Home', user: req.user, users })
  })
}