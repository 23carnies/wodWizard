const Wod = require('../models/wod')
const User = require('../models/user')
//const QuickChart = require('quickchart-js');




module.exports = {
    create,
    show
}


// triggered by details button on all wods page
function show(req,res) {
    Wod.findById(req.params.id)
    .then((wod) => {
        User.findById(req.user._id)
        .then((user) => {
            let wodResults = user.results.filter(result => {
                if(result.wodId === req.params.id) return true; 
                else return false
            })
            res.render('results/show', {
                title: 'Results',
                user, 
                wod,
                wodResults
            })
        })
    })
}


// const myChart = new QuickChart();
// myChart.setConfig({
//   type: 'bar',
//   data: { labels: wodResults.map(result => result.timestamps), datasets: wodResults.map(result => result.result) },
// });

// console.log(myChart.getUrl())


// function create(req, res) {
//     User.findById(req.user._id)
//     .populate('results.wod')
//     .exec((err, user) => {
//         let idx = user.results.findIndex(a => a.wod.equals(req.body.wodId))
//         if (idx === -1) {
//             users.results.push(req.body)
//             users.save().then(() => {
//                 res.render('users/profile', {
//                     title: 'Profile'})
//             })
//         } else {
//             users.results.time.push(req.body)
//             users.results.reps.push(req.body)
//             users.results.rounds.push(req.body)
//             users.results.distance.push(req.body)
//             users.results.otherResult.push(req.body)
//             users.save().then(() => {
//                 res.render('users/profile', {
//                     title: 'Profile'})
//             })
//         }
//     }
// )}    


function create(req, res) {
    User.findById(req.user._id)
        .then((user) => {
            user.results.push(req.body)
            user.save().then(() => {
            res.render(`users/profile`,
            {title: 'Profile',
            user})
        })
    })
}