const Movement = require('../models/movement')
const Wod = require('../models/wod')
const User = require('../models/user')


module.exports = {
  index,
  showProfile
  
}

function showProfile(req, res) {
  User.findById(req.user._id).populate('friends').then((user) => {
    res.render('users/profile', {
      title: 'Profile',
      user
    })
  })
}

function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', { title: 'Home', user: req.user, users })
  })
}