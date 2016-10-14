angular02.controller('FooterController', ['$scope', 'FooterService', function($scope, FooterService){

	$scope.user = FooterService.user;
	$scope.$watchCollection("user", function(newCollection, oldCollection) {

		$scope.showNewData = function() {
			$scope.newName = newCollection.name;
			$scope.oldName = oldCollection.name;
			$scope.newID = newCollection.id;
			$scope.oldID = oldCollection.id;
		}


	});




}])