const router = require('express').Router()
const goalsCtrl = require('../controllers/goals')


router.get('/new', isLoggedIn, goalsCtrl.new)
router.post('/:id', isLoggedIn, goalsCtrl.create)
router.delete('/:id', isLoggedIn, goalsCtrl.delete)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }


module.exports = router