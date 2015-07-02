'use strict';

angular.module('rgraphApp').directive('graphDirective', ['$timeout', function($timeout){
	/* jshint unused:false */
	/* global RGraph */	
	return {
		restrict: 'EA',
		scope:{
			data: '=data'
		},
		link: function(scope,element,attrs){

			element.append('<canvas id="cvs" width="600" height="400">[No canvas support]<canvas>');

			scope.$watch('data', function(data) {
        console.log(data);

        var line = new RGraph.Line({
        id: 'cvs',
        data: data.value,
        options: {
            numxticks: 11,
            numyticks: 5,
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            colors: ['red'],
            linewidth: 2,
            gutterLeft: 40,
            gutterRight: 20,
            gutterBottom: 50,
            labels: data.time,
            shadow: false,
            noxaxis: true,
            textSize: 16,
            textColor: '#999',
            spline: true,
            hmargin: 5,
            tickmarks: function (obj, data, value, index, x, y, color, prevX, prevY)
            {
                var co = obj.context;              
                RGraph.path(co, ['b', 'a', x, y, 3, 0, RGraph.TWOPI, false,'c','f', '#a00']);
            }
			  }
			  }).trace2({frames: 60}).on('beforedraw', function (obj){
			        RGraph.clear(obj.canvas, 'white');
			  });

      });

		}

	};
}]);