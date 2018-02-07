var mongoose = require('mongoose');
//***Star Wars
// var request = require('request');
// var getJSON = require('get-json');
const swapi = require('swapi-node');

var sendJsonResponse = function(res, status, contentJSON){
	res.status(status);
	res.json(contentJSON);
};

/* READ */
module.exports.listPeople = function(req, res, contentJSON){

	// getJSON('https://swapi.co/api/people/', function(error, res){
	//     console.log(res);
	// });

	swapi.get('http://swapi.co/api/people/').then((result) => {
		
		if(result != null){

			sendJsonResponse(res,200, {success: true, people: result});

		}else{

			sendJsonResponse(res, 500, {"message": " Problem with your server or the database server"});
		}
	});		
};



