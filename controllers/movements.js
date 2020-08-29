const Movement = require('../models/movement')

module.exports = {
    new: newMovement, 
    
}



function newMovement(req, res) {
    Movement.find({}, (err, movements) => {
        res.render('movements/new', {
            title: 'Add Movement'
        })
    })
}