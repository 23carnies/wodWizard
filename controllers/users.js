const Movement = require('../models/movement')
const Wod = require('../models/wod')
const User = require('../models/user')


module.exports = {
  index,
  showProfile,
  update,
  show,
  addFriend, 
  removeFriend

}

function addFriend(req, res) {
  req.user.friends.push(req.params.id)
  req.user.save().then(() => {
    res.redirect(`/users/${req.params.id}`)
  })
}

function removeFriend(req, res) {
  let idx = req.user.friends.indexOf(req.params.id)
  req.user.friends.splice(idx, 1)
  req.user.save().then(() => {
    res.redirect(`/users/${req.params.id}`)
  })
}

function show(req, res) {
  User.findById(req.params.id).then((userInfo) => {
    res.render(`users/show`, {
      title: 'Find Friends', 
      userInfo,
      user: req.user
    })
  })
}

function update(req, res) {
  req.user.moniker = req.body.moniker
  req.user.bio = req.body.bio
  req.user.avatar = req.body.avatar
  req.user.save().then(() => {
    res.redirect('/users/profile')
  })
}

function showProfile(req, res) {
  User.findById(req.user._id).populate('friends').then((user) => {
    res.render('users/profile', {
      title: 'Profile',
      user,
      goals: req.body,
      wod: null
    })
  })
}

function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', { title: 'Home', user: req.user, users })
  })
}