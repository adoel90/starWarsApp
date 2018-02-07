var mongoose = require('mongoose');

//***Star Wars
const swapi = require('swapi-node');

var sendJsonResponse = function(res, status, contentJSON){
	res.status(status);
	res.json(contentJSON);
};



/* READ */
module.exports.listVehicles = function(req, res, contentJSON){

	swapi.get('http://swapi.co/api/vehicles/').then((data) => {
		
		if(data != null){

			sendJsonResponse(res,200, {success: true, vehicles: data});

		}else{

			sendJsonResponse(res, 500, {"message": " Problem with your server or the database server"});
		}
	});		
};