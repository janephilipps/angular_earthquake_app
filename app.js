angular.module('earthquakeApp', ['ngMap'])

  .controller("MainCtrl", ['$scope', '$http', function ($scope, $http) {

    $scope.earthquakes = [];
    $scope.count = 0;

    $scope.map;

    $scope.latitude = 37.7910569;
    $scope.longitude = -122.40079109999999;

    $scope.searchByCity = function (city) {

      // Initialize city varible
      var city = $scope.city;

      // Call OpenWeather API to get lat & lon coordinates
      // Set url var
      var url = "http://api.openweathermap.org/data/2.5/weather?mode=json&cnt=7&units=imperial&callback=JSON_CALLBACK&q=";

      $http.jsonp(url + $scope.city)
        .success(function(data) {
          $scope.coords = data;
        });
    }

    $scope.getLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition($scope.showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    $scope.showPosition = function (position) {
      $scope.latitude = position.coords.latitude;
      $scope.longitude = position.coords.longitude;
      console.log("Latitude: " + $scope.latitude + " Longitude: " + $scope.longitude);
      console.log(position.timestamp);
      var timestamp = position.timestamp;
      var pubDate = new Date(timestamp);
      console.log(pubDate);
      $scope.searchEarthquakes();
    }

    $scope.searchEarthquakes = function () {

      // Initialize city varible
      // var city = $scope.city;

      // Initialize API call
      $http.get('http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2015-08-29&endtime=2015-08-30&latitude=' + $scope.latitude + '&longitude=' + $scope.longitude + '&maxradius=100')
        .success(function (data) {

          // On success, create new var earthquakeData
          var earthquakeData = data.features;

          // Push earthquakeData into earthquakes
          $scope.earthquakes = earthquakeData;

          $scope.count = data.metadata.count;

        })
        .error(function (data) {

          // On error, display message in the console
          console.log("There was an error");

        })
    }

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