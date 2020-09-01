const Wod = require('../models/wod')
const User = require('../models/user')


module.exports = {
    create
}

function create(req, res) {
    User.findById(req.user._id)
        .then((user) => {
            user.results.push(req.body)
            user.save().then(() => {
            res.render(`users/profile`,
            {title: 'Profile',
            user            })
        })
    })
}


              