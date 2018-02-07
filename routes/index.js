

/* GET home page. */
var controllerServerMain = require("../app_server/controller_server/main");

module.exports = function(app){
	app.get("/", controllerServerMain.index);
}





