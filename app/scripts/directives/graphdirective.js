'use strict';

angular.module('rgraphApp').directive('graphDirective', ['$timeout', function($timeout){
	/* jshint unused:false */	
	return {
		restrict: 'EA',
		scope:{
			data: '=data'
		},
		link: function(scope,element,attrs){

			scope.$watch('data', function(data) {
        console.log(data);
      });

		}

	};
}]);