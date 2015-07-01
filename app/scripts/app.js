'use strict';

/**
 * @ngdoc overview
 * @name rgraphApp
 * @description
 * # rgraphApp
 *
 * Main module of the application.
 */
angular
  .module('rgraphApp', [
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
