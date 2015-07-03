'use strict';

angular.module('rgraphApp')
  .controller('MainCtrl', function ($scope, $http,loadData,$filter) {
  	/* jshint unused:false */	
    $scope.awesomeThings = [
      'me',
      'you',
      'everyone'
    ];


    loadData()
      .success(function(data){
        var valueArray = [];
        var timeArray = [];

        function arrange(element,i,array){
          var day = new Date(element.time);
          var niceDate = $filter('date')(day,'MMM,dd');
          valueArray.push(element.value);
          timeArray.push(niceDate);
        }

        for(var key in data){
          var datainner = data[key];
          for(var keyinner in datainner){
            var array = datainner[keyinner];
            array.forEach(arrange);
          }
        }

        $scope.data = {
          time: timeArray,
          value: valueArray
        };
      console.log($scope.data.value.length);         
      });

  });
