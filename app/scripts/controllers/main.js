'use strict';

angular.module('rgraphApp')
  .controller('MainCtrl', function ($scope,loadData,$filter) {
  	/* jshint unused:false */	

    $scope.url = '/files/Sample_data.json';

    // using loadData service to get JSON
    loadData($scope.url)
      .success(function(data){
        var valueArray = [];
        var timeArray = [];

        // creating arrays for x and y values of chart
        function arrangeInArrays(element,i,array){
          var day = new Date(element.time);
          var niceDate = $filter('date')(day,'MMM,dd');
          valueArray.push(element.value);
          timeArray.push(niceDate);
        }

        // entering JSON to extract only the needed content
        for(var key in data){
          var datainner = data[key];
          for(var keyinner in datainner){
            var arrayBoth = datainner[keyinner];
            $scope.arrayBoth = arrayBoth;
            arrayBoth.forEach(arrangeInArrays);
          }
        }

        $scope.currentOne = $scope.arrayBoth[0];
        $scope.currentOne = $scope.arrayBoth[0];
        console.log($scope.currentOne);

        // attaching the to arrays needed for chart display to one data object
        $scope.data = {
          time: timeArray,
          value: valueArray
        };

    
        // creating an longer version of the datestrings for display in title
        function dateExtender(dateString){
          var dateObject = new Date(dateString);
          var longDate = $filter('date')(dateObject,'longDate');
          return longDate; 
        }
        
        var length = $scope.data.time.length;
        $scope.first = dateExtender($scope.data.time[0]); 
        $scope.last = dateExtender($scope.data.time[length-1]);
      
      });

  });


 