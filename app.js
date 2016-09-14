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


