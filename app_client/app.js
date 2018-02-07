angular.module('starWarsApp', [
		'ngRoute', 
		'koleksiStarWarsFactoryModule',
		'ngMaterial'


	])
	.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){

		$locationProvider.hashPrefix('');
		$locationProvider.html5Mode({
			enabled:true
		});
    

		$routeProvider
			.when('/', {
				templateUrl : 'home-page/home.page.view.html',
				controller: 'homePageController'
			})		
			.when('/people', {
				templateUrl : 'koleksi-people/koleksi.people.view.html',
				controller: 'peopleController'
			})
			.when('/vehicles', {
				templateUrl : 'koleksi-vehicles/koleksi.vehicles.view.html',
				controller: 'vehiclesController'
			})
			.when('/page-not-found', {
				templateUrl : 'page-not-found/page.not.found.view.html',
				controller: 'pageNotFoundController'
			})
			.otherwise({
				redirectTo: '/page-not-found'
			});
	}]);
	

