'use strict';

angular.module('rgraphApp')
  .factory('loadData', function ($http) {
    var promise = null;
    

    return function(url) {
      if (promise) {
        return promise;
      } else {
        promise = $http.get(url);
        return promise;
      }
    };

  });
