angular.module('earthquakeApp', [])
  
  .controller("MainCtrl", ['$scope', function ($scope) {
    $scope.test = "Hello world!";
  }])

  .controller("TopNavbarCtrl", ['$scope', function ($scope) {

  }])

  .directive('topNavbar', function () {
    return {
      templateUrl: 'topnavbar.html',
      controller: 'TopNavbarCtrl'
    };
  })


  ;