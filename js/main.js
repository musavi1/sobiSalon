

    var shr = true;

    var app = angular.module('myApp',['ngRoute', 'ngMap']);
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/index' ,{templateUrl:'1delete.html', controller: 'thirdCtrl'})
            .when('' ,{templateUrl:'1delete.html', controller: 'thirdCtrl'})
            .when('/1',{templateUrl:'1delete.html', controller: 'thirdCtrl'})
            .when('/service',{templateUrl:'service.html', controller: 'secondCtrl' })
            .when('/contact',{templateUrl:'contact.html', controller: 'secondCtrl'})
            .otherwise({redirectTo:'1delete.html', controller: 'thirdCtrl'});



    }]);

    app.controller('firstCtrl', function($scope, $location) {
        $scope.$location = $location;
        $scope.name = 'First Controller';
        $scope.sh = shr;



    });

    app.controller('secondCtrl', function($scope, $location) {
        $scope.$location = $location;
        $scope.name = 'Second Controller';
        $scope.sh = false;
        shr = $scope.sh;

    });

    app.controller('thirdCtrl', function($scope, $location) {
        $scope.$location = $location;
        $scope.name = 'Third Controller';
        $scope.sh = true;
        shr = $scope.sh;



    });



