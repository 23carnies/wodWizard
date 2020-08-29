const router = require('express').Router()
const wodsCtrl = require('../controllers/wods')

router.get('/', isLoggedIn, wodsCtrl.index)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router