const router = require('express').Router();
const usersCtrl = require('../controllers/users');
const users = require('../controllers/users');

// GET /users
router.get('/', usersCtrl.index);
router.get('/', usersCtrl.showGoals)


module.exports = router;
