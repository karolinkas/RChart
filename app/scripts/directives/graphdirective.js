
'use strict';

angular.module('rgraphApp').directive('graphDirective', ['$timeout', function($timeout){
	/*jshint unused: false, undef:false */
	return {
		scope: {}, 
		restrict: 'A',
		link: function($scope, element) {
			element.append('<canvas id="cvs" width="600" height="250">[No canvas support]</canvas>');

			$timeout(function(){
				new RGraph.Gantt({
	        id: 'cvs',
	        data: [
	               [
	                [31, 28, null, 'Richard', 'tomato'],
	                [90,15, null, null, 'tomato']
	               ],
	               [
	                [0, 28, null, 'Rachel', 'tomato'],
	                [30,65, null, null, 'tomato']
	               ],
	               [12, 28, null, 'Fred', 'tomato'],
	               [0, 85, null, 'Barney', 'tomato']
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