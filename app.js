(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function($scope) {
 
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNums = function () {
        var totalNameVal = CalculateNumericForString($scope.name);
        $scope.totalValue = totalNameVal;
    };

    function CalculateNumericForString(string) {
        var totalStringValue = 0;
        for (let i = 0; i < string.length; i++)
        {
            totalStringValue += string.charCodeAt(i);
        }    
    
        return totalStringValue;

    }
    
    });


})();