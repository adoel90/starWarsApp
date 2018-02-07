var mongoose = require('mongoose');
const swapi = require('swapi-node');

var sendJsonResponse = function(res, status, contentJSON){
	res.status(status);
	res.json(contentJSON);
};

/* READ */
module.exports.getListMars = function(res, status, contentJSON){

	// getJSON('http://swapi.co/api/planets/', function(error, res){
	//     console.log(res);

	// });
	//swapi.get('http://swapi.co/api/planets/').then((data) => {
	swapi.get("http://swapi.co/api/planets/").then(function(result){

		console.log(result);
		if(result != null){

			sendJsonResponse(res,200, {success: true, mars: result});

		}else{

			sendJsonResponse(res, 500, {"message": " Problem with your server or the database server"});
		}
	});
};