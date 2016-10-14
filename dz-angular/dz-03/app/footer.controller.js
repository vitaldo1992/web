vitaldo03.controller('FooterController', ['$scope','$http','FooterService', function($scope, $http, FooterService){


	$scope.sortNumb = [

	{numb: 5},
	{numb: 10},
	{numb: 20},
	{numb: 50},
	{numb: 100},
	{numb: 200},
	{numb: 400}

	]

	$scope.loading = true;
	$http.get('myPeople.json')
	.then(function(response) {

		$scope.myPeople = response.data;
		console.log($scope.myPeople);
	})
	.catch(function(reason) {

	})
	.finally(function() {
		$scope.loading = false;
	});

	$scope.Math = window.Math;
	$scope.miv=0;
	// $scope.changeMiv = function() {
	// 	miv = 0;
	// }
}])
