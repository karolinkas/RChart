'use strict';

angular.module('rgraphApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'me',
      'you',
      'everyone'
    ];


    $http.get('/files/Sample_data.json')
       .success(function(data){
   				
        });


  });
