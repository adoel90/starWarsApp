angular.module('koleksiStarWarsFactoryModule',[])
	.factory('koleksiStarWarsFactory', function($http){
		return {

			getListPeople : function(){

				return $http({
					method: 'GET',
					url : '/api/people'
				})
			},

			getListVehicles: function(){
				return $http({
					method: 'GET',
					url : '/api/vehicles'
				})
			}
		
		}
	});