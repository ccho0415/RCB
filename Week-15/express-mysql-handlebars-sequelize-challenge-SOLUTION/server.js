var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');

var application_controller = require('./controllers/application_controller');
var tasks_controller = require('./controllers/tasks_controller');
var people_controller = require('./controllers/people_controller');
var users_controller = require('./controllers/users_controller');

var app = express();

// override POST to have DELETE and PUT
app.use(methodOverride('_method'))

//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 60000 }}));
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', application_controller);
app.use('/users', users_controller);
app.use('/people', people_controller);
app.use('/people', tasks_controller);

// if all other routes doesn't work it'll go here 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    // app.get("env") will return the string "development" when you're running it on your computer by default. 
    // When run on heroku this returns "production" It looks for the existence of process.evn.NODE 
    // That is undefined by default if running locally (which express interprets as "development") 
    // Set to "production" automatically by heroku when deployed.
    error: (app.get('env') === 'development') ? err : {}
  });
});


module.exports = app;
