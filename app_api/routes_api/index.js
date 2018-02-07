const express = require('express');
var router = express.Router();

const controllerPeopleStarWars = require('../controller_api/peopleModule');
// const controllerPlanetsStarWars = require('../controller_api/planetsModule');
const controllerMarsStarWars = require('../controller_api/marsModule');
const controllerVehiclesStarWars = require('../controller_api/vehiclesModule');


/* STAR WARS */
router.get('/people', controllerPeopleStarWars.listPeople);
router.get('/mars', controllerMarsStarWars.getListMars);
router.get('/vehicles', controllerVehiclesStarWars.listVehicles);

module.exports = router;


