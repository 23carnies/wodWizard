const Movement = require('../models/movement')

module.exports = {
    new: newMovement, 
    
}



function newMovement(req, res) {
    res.redirect('/movements/new')
}