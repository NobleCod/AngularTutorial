(function () {
'use strict';

angular.module('MyFirstApp',[])

.controller('MyFirstController', function($scope) {
 
    $scope.name = "Mohamed";
    $scope.sayHello = function () {
        return "Hello " + $scope.name;
    }

}); 

})();