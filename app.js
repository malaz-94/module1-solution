(function() {
  'use strict';
  angular.module('LunchApp', []).controller('LunchController', LunchController);
  LunchController.$inject = ['$scope'];
  function LunchController($scope) {
    $scope.name = "";

     $scope.checklunch = function() {
      var seperator = ",";
      var lunchstr = $scope.name.split(seperator);
      $scope.checkstr = lunchstr.length;

        if ($scope.checkstr <= 3) {
           $scope.msg = "enjoy!";
         }
         if (  $scope.checkstr > 3) {
           $scope.msg = "Too much!";
          }

          if ($scope.name == "") {
             $scope.msg = "please enter data first";
           }


    };

  }
})();
