myApp.controller('HeaderController', ['$scope','HeaderService', function($scope,HeaderService){
	$scope.name = HeaderService.name;
}])