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
            arrayBoth.forEach(arrangeInArrays);
          }
        }

        // attaching the to arrays needed for chart display to one data object
        $scope.data = {
          time: timeArray,
          value: valueArray,
        };

    
        // creating an longer version of the datestrings for display in title
        function dateExtender(dateString){
          var dateObject = new Date(dateString);
          var longDate = $filter('date')(dateObject,'longDate');
          return longDate; 
        }
        
        // getting start end end value to cut data
        var length = $scope.data.time.length;
        $scope.first = $scope.data.time[0];
        $scope.last = $scope.data.time[length-1];


      });

  });


 