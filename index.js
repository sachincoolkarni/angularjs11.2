var mod=angular.module("myapp",[]);
mod.controller("mycontroller",["$scope",function($scope)

{
	$scope.alrt=function()
	{
		alert("You have clicked the button");
	}
}]);
