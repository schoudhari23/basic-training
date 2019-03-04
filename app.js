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

//require('dotenv').config();

// view engine setup
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


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const store = new KnexSessionStore({
  knex: knex,
  tablename: 'sessions' // optional. Defaults to 'sessions'
});

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true, 
  //cookie: {
    //maxAge: 10000 // ten seconds, for testing
  //},
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
      //return done(null, false);

      const db = require('./db');
      db.query('SELECT id, password FROM users WHERE username = $1',[username],function(err, result, fields){
          if(err) {done(err)};
          //console.log(`Results: ${JSON.stringify(result)}`); 
          //console.log(`Password: ${JSON.stringify(result.rows[0])}`);
          console.log(`Password:`+result.rows[0].password);
          var pwd = result.rows[0].password
          //console.log(`user_id:`+result.rows[0].id);
          if(result.rows[0].password == null) {
            done(null, false);
          } else {
            console.log(password.localeCompare(pwd));
            if(password.localeCompare(pwd) == 0) {
                console.log('Sucess');
                return done(null, {user_id : result.rows[0].id});
            }
            else {
                return done(null, false);
            } 
          } 
    
          // console.log(`Password:`+result.rows[0]);

          //return done(null, 'reasdaf');
      });      
  }
));

var count = 0;

/*app.use('/', function (req, res, next) {
    var n = req.session.views || 0
    req.session.views = ++n
    res.end(n + ' views')
})*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// Handlebars default config
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
