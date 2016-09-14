var myApp = angular.module("firstApp", ['ngRoute']);
myApp.config(['$routeProvider', function ($routeProvider) {
         $routeProvider
             .when('/', {
                 templateUrl:'templates/default-view.html'
             }).when('/:menuName', {
                 templateUrl:'templates/view-data.html',
                 controller: 'viewDataCtrl'
             })
			 .when('/home', {
				 templateUrl:'templates/home.html',
				 controller: 'viewDataCtrl'
			 })
             .otherwise({redirectTo: '/'});
     }]);

myApp.controller("w3MainCtrl", function($scope, $location){
	$scope.menuNames = [{name: "TopPics"}, {name: "Food"}, {name: "Coffee"}, {name: "Shopping"}];
	$scope.data = {model: null};
	$scope.update = function () {
		$scope.data = [];
		$scope.data.push(angular.element('#Search').val());
		$scope.data.push(angular.element('#city').val());
			if ($scope.data[0] != "" && $scope.data[1] != "") {
				 	$location.path('/' + $scope.data);
			}

	}
});
