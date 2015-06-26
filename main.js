var module = angular.module("sampleApp", ['ngRoute']);

    module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/route1', {
                    templateUrl: 'templates/template1.html',
                    controller: 'RouteController1'
                }).
                when('/route2', {
                    templateUrl: 'templates/template2.html',
                    controller: 'RouteController2'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);

    module.controller("RouteController1", function ($scope, $q) {
        var deferred = $q.defer();
        $scope.name = "Ashish Choure";
        test = function (username) {
            setTimeout(function () {
                return deferred.reject(username);
            }, 500);
            return deferred.promise;
        };
        var promise = test('TestCTUser');
        promise.then(function (test) {
            debugger;
        }, function (error) {
            debugger;
        });
    });
    module.controller("RouteController2", function ($scope) {
        $scope.name = "Sumit Anand";
    });
