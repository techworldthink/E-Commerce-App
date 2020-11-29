var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//user r4
var userRouter = require('./routes/user');
//admin r4
var adminRouter = require('./routes/admin');

//handlebars r4
var hbs=require('express-handlebars')

var app = express();

//to upload files r4
var fileUpload=require('express-fileupload')
//databsse r4
var db=require('./config/connection')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//layout r4
app.engine(
  'hbs',
  hbs({
    extname:'hbs',
    defaultLayout:'layout',
    layoutsDir:__dirname+'/views/layout/',
    partialsDir:__dirname+'/views/partials/'
  }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//use database
db.connect((err)=>{
  if(err) console.log("connection error" + err);
  else console.log("Database connected");
})
/* Connect
db.connect((err) => {
  if(err){
    console.log(err);
  }
  console.log('MySql Connected');
});*/
//to upload file r4
app.use(fileUpload())
//user r4
app.use('/', userRouter);
//admin r4
app.use('/admin', adminRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('user/error');
});

module.exports = app;
