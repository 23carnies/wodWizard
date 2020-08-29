const router = require('express').Router();
const usersCtrl = require('../controllers/users');


// GET /users
router.get('/', usersCtrl.index);
router.get('/createWod', usersCtrl.createWod)


module.exports = router;
