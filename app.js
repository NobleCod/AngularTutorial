(function () {
    'use strict';

    angular.module('DIApp', [])

        .controller('DIController', ['$scope', '$filter' , DIController]);
    
        function DIController($scope, $filter) {
            $scope.name = "Mohamed";

            $scope.upper = function () {
                var upperCase = $filter('uppercase');
                $scope.name = upperCase($scope.name);
            };
        }
    

})();