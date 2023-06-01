(function () {
    'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController)
        .filter('sis', SisFilter);
        
        MsgController.$inject = ['$scope','$filter','sisFilter'];
        function MsgController($scope,$filter,sisFilter) {
            $scope.name = "Mohamed";
            $scope.AppleCost = .35;

            $scope.saySisMsg = function () {
                var msg = "it's the weekend bro, let's party!";
                var output = $filter('uppercase')(msg);
                output = sisFilter(output)
                return output
            }
            
            $scope.sayMsg = function () {
                var msg = "it's the weekend bro, let's party!";
                var output = $filter('uppercase')(msg);
                return output
            }

            $scope.feedme = function () {
                $scope.fed = "I ate an Apple, I'm Fed!";
            }
        };

    function SisFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("BRO", "SIS");
            return input;
        }
    };

})();