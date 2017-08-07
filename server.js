// Setup Up ==================================================================================
// ALl the TOols we need

var express      = require('express');
var app          = express();
var port         = process.env.PORT || 8080;
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');


var configDB     = require('./config/database');



// Configurations ===========================================================================

mongoose.connect(configDB.url);                                        // Database connection

// require('./config/passport')(passport);                            // pass passport for configuration

// Setup Express Application

app.use(morgan('dev'));                                              // Log every request to the console
app.use(cookieParser());                                             // read cookies (needed for Auth)
app.use(bodyParser());                                               // Get Info from HTML Form

app.set('view engine', 'ejs');                                       // setup ejs for templating


// Required for Passport Setup

app.use(session({secret: 'ilovescotchscotchyscotchscotch'}));       // session secret     
app.use(passport.initialize());
app.use(passport.session());                                        // persistent logging sessions
app.use(flash());                                                   // use connect-flash for flash messages stored in sessions



//Routes ======================================================================================

//require('./app/routes.js')(app, passport);                         // Load our routes and pass in our app and fully configured passport


// Launch =====================================================================================

app.listen(port);
console.log("magic happens at port : " + port);





