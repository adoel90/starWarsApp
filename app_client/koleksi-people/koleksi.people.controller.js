angular.module('starWarsApp')
	.controller('peopleController', function($scope, koleksiStarWarsFactory, $mdDialog){

		$scope.config = {
			oke:true
		};

		$scope.dataListPeople = [];

		/* READ DATA */
		(function process(){
			
			var params = null;


			koleksiStarWarsFactory.getListPeople().then(function successCallback(response){
				if(response){

					console.log("OKE, FACTORY WORK !!!");
					// $scope.judulBuku = response.data[0].judulBuku; --> MANTAP !!!
					$scope.dataListPeople = response.data.people;
					$scope.config.oke = false;

				}else{
					console.log("FACTORY IS NOT WORKING");
				}
			}, function errorCallback(response){
					console.log("Error Server Database ");
			});

		})();

		/*READ DATA Modal */
		$scope.showDetails = function(list,ev){
			$scope.list = list;
		 	console.log($scope.list);


			$mdDialog.show({
				controller: ModalUpdateController,
				templateUrl: 'koleksi-people/template.modal.people.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				fullscreen: $scope.customFullscreen,
				locals:{
					// dataToPass: $scope.dataCreateBook
					dataToPass: $scope.list
				}

			}).then(function(response){
				// console.log(response.data);
				/*Next, bikin supaya muncul 'snackbar' ketika berhasil UPDATE*/

				// console.log($scope.dataListBook);

				/*
					Salah satu flow logic-nya adalah data dari 'ModalCreateController' hasil dari koleksiBookFactory.postCreateBook(params)
					itu bisa di akses di dalam function ini, atau dengan kata lain, minimal hasil 'POST TERBARU' 
					bisa di consol.log("Which one DATA ? !!!!");
				
				*/

				

			}, function(){
				/* You can create 'snackbar' in here if THERE IS NOTHING HAPPEN */
				console.log("Okeh, berhasil muncul Modal Advance");
			})

			.finally(function(response){
				// console.log($scope.dataCreateBook.judulBuku);
			})
		};

		function ModalUpdateController($scope, $mdDialog,dataToPass){
		 	// console.log("Fire ModalUpdateController");
		 	$scope.dataToPass = dataToPass;
		 	console.log("dataToPass --> " +$scope.dataToPass);

		 	$scope.editThisData = {
		 	
				name: $scope.dataToPass.name,
		 		eyeColor : $scope.dataToPass.eye_color,
		 		birthYear: $scope.dataToPass.birth_year,
		 		hairColor: $scope.dataToPass.hair_color,
				skinColor: $scope.dataToPass.skin_color,
				gender: $scope.dataToPass.gender,
				mass: $scope.dataToPass.mass,
				height: $scope.dataToPass.height
		 	};
		 	console.log("Edit this data : " + $scope.editThisData);
		
		 	$scope.hide = function() {
		      $mdDialog.hide();
		    };

		    $scope.cancel = function() {
		      $mdDialog.cancel();
		    };
		 };

	});