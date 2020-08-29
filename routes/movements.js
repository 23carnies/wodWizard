const router = require('express').Router()
const movementsCtrl = require('../controllers/movements')


router.post('/', isLoggedIn, movementsCtrl.new)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router
