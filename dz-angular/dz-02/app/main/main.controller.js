angular02.controller('MainController', ['$scope', 'MainService', function($scope, MainService){

	$scope.AdmObj = MainService.AdmObj;
	$scope.$watchGroup(["AdmObj.name", 'AdmObj.password'], function(newValue, oldValue) {

	//console.log("newValue: ",newValue);
	console.log("newValue: ",newValue);
	console.log("oldValue: ",oldValue);
	$scope.newName = newValue[0];
	$scope.oldName = oldValue[0];

	$scope.newPassword = newValue[1];
	$scope.oldPassword = oldValue[1];

})



}])