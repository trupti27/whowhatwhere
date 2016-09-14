var w3App = angular.module("m3wApp", ['ngRoute']);
w3App.config(['$routeProvider', function ($routeProvider) {
	console.log('config');
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

w3App.controller("w3MainCtrl", function($scope, $location){
	$scope.menuNames = [{name: "Top Pics"}, {name: "Food"}, {name: "Coffee"}, {name: "Shopping"}];
	$scope.data = {model: null};
	$scope.update = function () {
		$scope.data = [];
		$scope.data.push(angular.element('#Search').val());
		$scope.data.push(angular.element('#city').val());
			if ($scope.data[0] != "" || $scope.data[1] != "") {
				 	$location.path('/' + $scope.data);
			}

	}
});
