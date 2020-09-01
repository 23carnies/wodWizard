const Wod = require('../models/wod')

module.exports = {
    create
}

function create(req, res) {
    randWod._id = req.body._id
    Wod.findById(req.params.id, function(err, wod) {
        wod.results.push(req.body) 
        wod.save((err) => {
            res.redirect(`/users/${}`)
        })
    })
}