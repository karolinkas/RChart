'use strict';

angular.module('rgraphApp').directive('graphDirective', ['$timeout', function($timeout){
	/* jshint unused:false */	
	return {
		restrict: 'EA',
		link: function(scope,element,attrs){

			console.log(attrs.chartData);
		}

	};
}]);