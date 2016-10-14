angular.module('clock', []).controller('clock', ['$scope','$interval', function($scope,$interval){
	$scope.time = new Date();
		$scope.hours = $scope.time.getHours();
		$scope.minutes = $scope.time.getMinutes();
		$scope.seconds = $scope.time.getSeconds();
	$scope.setData = function() {

		$scope.time = new Date();
		$scope.hours = $scope.time.getHours();
		$scope.minutes = $scope.time.getMinutes();
		$scope.seconds = $scope.time.getSeconds();


	};

	$interval($scope.setData,1000)

}])