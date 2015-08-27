angular.module('earthquakeApp', [])

  .controller("MainCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.test = "Hello world!";

    $scope.earthquakes = [];

    // Initialize API call
      $http.get('http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2015-08-25&endtime=2015-08-26&latitude=37&longitude=-122&maxradius=10')
        .success(function (data) {

          // On success, create new var earthquakeData
          var earthquakeData = data;

          // Push earthquakeData into earthquakes
          $scope.earthquakes.push(earthquakeData);

        })
        .error(function (data) {

          // On error, display message in the console
          console.log("There was an error");

        })

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