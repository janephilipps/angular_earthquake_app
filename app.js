angular.module('earthquakeApp', [])
  
  .controller("MainCtrl", ['$scope', function ($scope) {

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