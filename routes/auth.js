const router = require('express').Router();
const passport = require('passport');


// // The root route renders our only view
// router.get('/', function(req, res) {
//   res.redirect('/wods/show', {
//     title: 'Today\'s Wod', 
//     user: req.user})
// });

router.get('/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/google/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/wods',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;