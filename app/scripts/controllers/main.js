'use strict';

angular.module('rgraphApp')
  .controller('MainCtrl', function ($scope, $http) {
  	/* jshint unused:false */	
    $scope.awesomeThings = [
      'me',
      'you',
      'everyone'
    ];


    $http.get('/files/Sample_data.json')
       .success(function(data){

          var valueArray = [];
          function arrange(element,i,array){
            valueArray.push(element.value);
            return valueArray;

          }

          for(var key in data){
            var datainner = data[key];
            for(var keyinner in datainner){
              var array = datainner[keyinner];
            }
            array.forEach(arrange);
            console.log(valueArray);
          }
        });

  });
