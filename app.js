(function () {
    'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);
    
        MsgController.$inject = ['$scope'];
        function MsgController($scope) {
            $scope.name = "Mohamed";

            $scope.sayMsg = function () {
                return "it's the weekend bro, let's party!"
            }

            $scope.feedme = function () {
                $scope.fed = "I'm Fed!";
            }
        };

})();