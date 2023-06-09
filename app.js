(function () {
    'use strict';

    angular.module('CounterApp', [])
        .controller('CounterController', CounterController);
        
        CounterController.$inject = ['$scope','$timeout'];
        function CounterController($scope) {
            $scope.onceCounter = 0;
            $scope.showNumberOfWatchers = function () {
                console.log("# of Watchers: ", $scope.$$watchersCount);
            };
            $scope.countOnce = function () {
              $scope.onceCounter = 1;    
            };
        }
})();