const router = require('express').Router();
const usersCtrl = require('../controllers/users');
const users = require('../controllers/users');


// GET /users
router.get('/', isLoggedIn, usersCtrl.index);
// router.get('/createWod', isLoggedIn, usersCtrl.createWod)
router.get('/:id', isLoggedIn, usersCtrl.showProfile)
router.put('/profile', isLoggedIn, usersCtrl.update)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }


module.exports = router;
