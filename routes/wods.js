const router = require('express').Router()
const wodsCtrl = require('../controllers/wods')

router.get('/', isLoggedIn, wodsCtrl.index)
router.get('/new', isLoggedIn, wodsCtrl.new)
router.post('/new', isLoggedIn, wodsCtrl.create)
router.get('/:id', isLoggedIn, wodsCtrl.showRandom)



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router