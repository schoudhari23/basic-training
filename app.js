var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

const KnexSessionStore = require('connect-session-knex')(session);

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const Knex = require('knex');
const knex = Knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'test1'
    }
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const store = new KnexSessionStore({
  knex: knex,
  tablename: 'sessions' 
});

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true, 
  cookie: {
    maxAge: 10000 // ten seconds, for testing
  },
  store: store
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
})

app.use('/', index);
app.use('/users', users);

passport.use(new LocalStrategy(
  function(username, password, done) {
      console.log(username);
      console.log(password); 

      const db = require('./db');

      db.query('SELECT * FROM users WHERE username = $1 AND password = crypt( $2, password)', [username, password], function (err, result, fields) {
          if(err) {done(err)};
          
          console.log(`Result:+${JSON.stringify(result.rows[0])}`);
          if(result.rows[0] === undefined) {
            done(null, false);
          } else {    
            return done(null, {user_id : result.rows[0].id});
          }        
      });   
  }
));

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

const hbs = require('hbs');
const fs = require('fs');

const partialsDir = __dirname + '/views/partials';

const filenames = fs.readdirSync(partialsDir);

filenames.forEach(function (filename) {
  const matches = /^([^.]+).hbs$/.exec(filename);
  if (!matches) {
    return;
  }
  const name = matches[1];
  const template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
  hbs.registerPartial(name, template);
});

hbs.registerHelper('json', function(context) {
    return JSON.stringify(context, null, 2);
});


module.exports = app;
