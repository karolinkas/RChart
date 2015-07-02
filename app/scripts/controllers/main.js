'use strict';

angular.module('rgraphApp')
  .controller('MainCtrl', function ($scope, $http,loadData) {
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
            valueArray.push(element.value);
            timeArray.push(new Date(element.time).toString());
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

          console.log($scope.data);
           
        });

  });
