const User = require('../models/user')
const Wod = require('../models/wod')
const Movement = require('../models/movement')


module.exports = {
    // index,
    new: newWod,
    create,
    showRandom
    
}

function showRandom(req, res) {
    Wod.estimatedDocumentCount().exec((err, count) => {
        let random = Math.floor(Math.random() * count)
        Wod.findOne().skip(random).exec((result) => {
            console.log(result)
            res.render('wods/show', {
                title: 'Daily Wod', 
                user: req.user,
                wod: req.body
            })
        })
    })
}

function create(req, res) {
    req.body.createdBy = req.user.name
    req.body.avatar = req.user.avatar
    Wod.create(req.body) 
    .then(wod => {
        console.log(wod)
        res.render('wods/new', {
            title: 'Add Wod',
            user: req.user,
            wods: req.body
        })
    })
}


function newWod(req, res) {
    Movement.find({}, (err, movements) => {
        res.render('wods/new', {
            title: 'Add Wod',
            user: req.user,
            movements
        })
    })
}


// function index(req, res) {
//     Wod.find({})
//     .then((wods) => {
//         console.log(wods)
//         res.render('wods/index', {title: 'WOD', 
//             user: req.user,
//             wods})
//     })
// }