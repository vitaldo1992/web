vitaldo03.controller('MainController', ['$scope','$http', '$timeout', function($scope, $http, $timeout){

	$scope.favotiteLoveStuffs = [

	{ id: 1, name: "waterMelon" },
	{ id: 2, name: "bifshteks" },
	{ id: 3, name: "sushi" },
	{ id: 4, name: "meat" },
	{ id: 5, name: "sour cream" },
	{ id: 6, name: "milk" },
	{ id: 7, name: "pizza" }

	]

	$scope.show = false;
	$scope.changeShow = function() {
		$scope.show=!$scope.show;
	};

}])