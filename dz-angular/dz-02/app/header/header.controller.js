angular02.controller("HeaderController", function($scope, HeaderService) {

	$scope.name = "Vitaldo";
	$scope.adminName = HeaderService.name;
	$scope.myStyle = {
		color: "red"
	};
	$scope.customerName = "Helen";
});