'use strict';

angular.module('rgraphApp').directive('graphDirective', ['$timeout', function($timeout){

	return {
		scope: {}, 
		restrict: 'A',
		link: function($scope, element) {
			element.append('<canvas id="cvs" width="600" height="250">[No canvas support]</canvas>');

			$timeout(function(){
				var gantt = new RGraph.Gantt({
	        id: 'cvs',
	        data: [
	               [
	                [31, 28, null, 'Richard', 'Gradient(green:#0f0)'],
	                [90,15, null, null, 'gradient(green:#0f0)']
	               ],
	               [
	                [0, 28, null, 'Rachel', 'Gradient(green:#0f0)'],
	                [30,65, null, null, 'Gradient(green:#0f0)']
	               ],
	               [12, 28, null, 'Fred', 'Gradient(green:#0f0)'],
	               [0, 85, null, 'Barney', 'Gradient(green:#0f0)']
	              ],
	        options: {
	            xmax: 120,
	            gutter: {
	                right: 35
	            },
	            labels: {
	                self: ['January', 'February', 'March', 'April'],
	                align: 'bottom'
	            },
	            title: {
	                self: 'Work schedule for Xyz Ltd',
	                vpos: 0.6
	            },
	            background: {
	                grid: false
	            },
	            vbars: [
	                    [31,28,'#ddd'],
	                    [90,30,'#ddd']
	                   ],
	            borders: false
	        }
	    }).draw();
		});

		
		}
	};
}]);