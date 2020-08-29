const router = require('express').Router();
const passport = require('passport');


// The root route renders our only view
router.get('/wods/show', function(req, res) {
  res.redirect('/wods/show');
});

router.get('/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/google/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/wods/show',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;