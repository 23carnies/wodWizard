const router = require('express').Router();
const passport = require('passport');


// // The root route renders our only view
router.get('/', function(req, res, wods) {
  res.redirect('/wods/show', {
    title: 'Today\'s Wod', 
    user: req.user,
    wods})
});

router.get('/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/google/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/wods/random',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;