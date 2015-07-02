'use strict';

angular.module('rgraphApp')
  .factory('loadData', function ($http) {
    var promise = null;

    return function() {
      if (promise) {
        return promise;
      } else {
        promise = $http.get('/files/Sample_data.json');
        return promise;
      }
    };

  });
