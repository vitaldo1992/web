myApp.controller('FooterController', ['$scope','FooterService','$http', function($scope, FooterService, $http){
	$scope.try = "myyyyy";
	$http.get("myPeople.json").then(function(response){
		$scope.myPeople = response.data;

		$scope.selectValue = [
		{numb: 5},
		{numb: 10},
		{numb: 20},
		{numb: 50},
		{numb: 100},
		{numb: 200},
		{numb: $scope.myPeople.length, title: "all"}
	];

	$scope.Math = window.Math;
	$scope.choosedNumb = $scope.selectValue[2].numb;

	($scope.numBut = function() {

		$scope.num = Math.ceil($scope.myPeople.length/$scope.choosedNumb);
		$scope.arrBut = new Array($scope.num);
		$scope.untilNumb = '';
		$scope.index = 0;
	})();
	});

	$scope.increase = function(index) {
		$scope.index = index;
		$scope.untilNumb = $scope.choosedNumb*index
	}



}])