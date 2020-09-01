const router = require('express').Router()
const resultsCtrl = require('../controllers/results')


router.post('/wod/:id', isLoggedIn, resultsCtrl.create)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

  module.exports = router