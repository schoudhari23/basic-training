var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(req.user);
  //console.log(req.isAuthenticated());
  res.render('home', { title : 'HomePage' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title : 'Login' });
});

router.get('/logout', function(req, res, next) {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

router.post('/login', passport.authenticate('local', { 
  successRedirect: '/profile',
  failureRedirect: '/login',
  //failureFlash: true
  //failureFlash: 'Invalid username or password',
  //successFlash: 'Welcome!' 
}));

router.get('/profile', authentMiddle(), function(req, res, next) {
  res.render('profile', { title : 'profile' });
});

router.get('/register', function(req, res, next) {
  //const db = require('../db.js');
  res.render('register', { title: 'Register' });
});


router.post('/register', function(req, res, next) {

  req.checkBody('fname','First Name field cannot be empty').notEmpty();
  req.checkBody('fname','First Name must be greater than 4 characters').len(4,15);
  req.checkBody('username','User Name field cannot be empty').notEmpty();
  req.checkBody('username','User Name must be greater than 4 characters').len(4,15);
  req.checkBody('email','Email is not valid').isEmail();
  req.checkBody('email','Email field cannot be empty').notEmpty();
  req.checkBody('password','Password field cannot be empty').notEmpty();
  req.checkBody('password','Password you entered is too shortt!').len(4,15);
  req.checkBody('mobile','Mobile number field cannot be empty').notEmpty();
  req.checkBody('mobile','Mobile number should be of 10 digits').len(10);

  const errors = req.validationErrors();

  if(errors) {
    console.log(`errors: ${JSON.stringify(errors)}`);

    res.render('register', 
    {
      title: 'Registration Error',
      errors : errors
    });
  } else {
    const fname = req.body.fname;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const mobile = req.body.mobile;
    
    // console.log(req.body.fname);
    // console.log(req.body.username);
    // console.log(req.body.email);
    // console.log(req.body.password);
    // console.log(req.body.mobile);

    const db = require('../db.js');
    db.query('INSERT INTO users (fname, username, email, password, mobile) VALUES($1, $2, $3, $4, $5) RETURNING id', [fname, username, email, password, mobile], 
    function (err, result, fields) {
      if(err) 
        throw err;

      //console.log(`User: ${JSON.stringify(result)}`);  
      const user_id = result.rows[0];

      console.log(user_id);
      req.login(user_id, function(err){
        res.redirect('/');
          //res.render('register', {title: 'Registration Complete'}); 
      });  
      
    })
  }
});



passport.serializeUser(function(user_id, done) {
  done(null, user_id );
});

passport.deserializeUser(function(user_id, done) {
    done(null, user_id );
});

function authentMiddle() {
  return (req, res, next) => {
    //console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

    if(req.isAuthenticated()) return next();
    
    res.redirect('/login')  
  }
}

module.exports = router;
