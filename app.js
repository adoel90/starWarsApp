
const express = require('express');//1
const app = express();//2
var bodyParser = require('body-parser');//3
var cookieParser = require('cookie-parser');//4
var logger = require('morgan');//5
var path = require('path');//6

var mongoose = require('mongoose');
var favicon = require('serve-favicon');

require('./app_server/models/db');


app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('views', path.join(__dirname, '/app_server/views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));

var routesApi = require('./app_api/routes_api/index');
app.use('/api', routesApi);

var controllerServerLayout = require("./app_server/controller_server/layout");
const router = express.Router();

router.get("/", controllerServerLayout.angularApp);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
