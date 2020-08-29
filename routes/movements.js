const router = require('express').Router()
const movementsCtrl = require('../controllers/movements')


router.get('/new', isLoggedIn, movementsCtrl.new)
router.post('/new', isLoggedIn, movementsCtrl.create)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router
