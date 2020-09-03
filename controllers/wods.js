
const Wod = require('../models/wod')
const Movement = require('../models/movement')
const User = require('../models/user')


module.exports = {
    index,
    new: newWod,
    create,
    showRandom,
    results
}

function results(req, res) {
    Wod.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((wod) => {
        res.render('users/profile', {
            title: 'REsults',
            user: req.user,
            wod
        })
    })
}



// function results(req, res) {
//     User.findById(req.user._id)
//         Wod.results.findByIdAndUpdate(req.params.id, req.body, {new: true} => {
//             console.log(req.body)
//             wod.push(req.body)
//             wod.save().then(() => {
//                 res.render('users/profile/#results', {
//                     title: 'Profile'
//                 })
//             })
//     })
    
// }

function create(req, res) {
    req.body.createdBy = req.user.name
    req.body.avatar = req.user.avatar
    Wod.create(req.body) 
    .then(wod => {
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

function index(req, res) {
    Wod.find({})
    .then((wods) => {
        res.render('wods/index', {title: 'WOD', 
            user: req.user,
            wods})
    })
}

function showRandom(req, res) {
    Wod.find({})
    .then((wods) => {
        let randWod = wods[Math.floor(Math.random() * wods.length)]
        res.render('wods/random', {
            title: 'WOD',
            user: req.user,
            randWod
        })
    })
}