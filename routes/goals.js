const router = require('express').Router()
const goalsCtrl = require('../controllers/goals')


router.get('/new', goalsCtrl.new)
router.post('/', goalsCtrl.create)

module.exports = router