var mongoose = require('mongoose');
var gracefullShutdown; 

//var dbURI = 'mongodb://localhost:27017/Library'
var dbURI = 'mongodb://localhost:27017/StarWars'

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
	console.log("Mongoose connected to " + dbURI )
});

mongoose.connection.on('error', function(err){
	console.log("Mongoose connection error : " + err);
});

mongoose.connection.on('disconnected', function(){
	console.log("Mongoose disconnected ");
});

gracefullShutdown = function(msg, callback){
	mongoose.connection.close(function(){
		console.log("Mongoose disconnected through " + msg);
		callback();
	});
}

process.on('SIGINT', function(){
	gracefullShutdown('app termination', function(){
		process.exit(0);
	})
});
