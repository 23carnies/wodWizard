const router = require('express').Router()
const resultsCtrl = require('../controllers/results')


router.post('/users/:id', isLoggedIn, resultsCtrl.create)
router.get('/results/:id', isLoggedIn, resultsCtrl.show)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

  module.exports = router