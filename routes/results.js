const router = require('express').Router()
const resultsCtrl = require('../controllers/results')


// router.post('/users/:id', isLoggedIn, resultsCtrl.create)
// router.get('/results/:id', isLoggedIn, resultsCtrl.show)
// router.post('/chart', isLoggedIn, resultsCtrl.chart)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

  module.exports = router