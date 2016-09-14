myApp.controller("mainCtrl", function($scope, $http, $routeParams, $window, $location){
    $scope.menuNames = [{name: "TopPics"}, {name: "Food"}, {name: "Coffee"}, {name: "Shopping"}];
    $scope.data = {model: null};
    $scope.add = {};

    $scope.update = function () {
        $scope.data = [];
        $scope.data.push(angular.element('#Search').val());
        $scope.data.push(angular.element('#city').val());
        if ($scope.data[0] != "" && $scope.data[1] != "") {
            $location.path('/' + $scope.data);
        }

    }
});