'use strict';

angular.module('rgraphApp').directive('graphDirective', ['$timeout', function($timeout){
	/* jshint unused:false */
	/* global RGraph */	
    var id = 1;
	return {
		restrict: 'A',
		scope:{
			data: '=data'
		},
		link: function(scope,element,attrs){
        
            // creating a draw function according to the guidelines of the RGraph docs   
            function draw(name){
                
                var data = scope.data;
                var line = new RGraph.Line({
                id: name,
                data: data.value,
                options: {
                    backgroundGridVlines: false,
                    backgroundGridBorder: false,
                    colors: ['red'],
                    linewidth: 2,
                    gutterLeft: 60,
                    gutterRight: 60,
                    gutterTop: 50,
                    gutterBottom: 80,
                    labels: data.time,
                    noxaxis: true,
                    units: {
                            post: '$'
                        },
                    shadow: false,
                    textSize: 10,
                    textColor: '#999',
                    textAngle: 90,
                    // crosshairs: {
                    //     self: true,
                    //     snap: true
                    //                 },
                    tickmarks: function (obj, data, value, index, x, y, color, prevX, prevY){
                        var co = obj.context;              
                        RGraph.path(co, ['b', 'a', x, y, 3, 0, RGraph.TWOPI, false,'c','f', '#a00']);
                        }
                  }
                }).trace2({frames: 60}).on('beforedraw', function (obj){
                      RGraph.clear(obj.canvas, 'white');
                });

                // custom tooltip with less decimal places
                var tooltip = data.value.map(function(current,i,array){
                    return 'Cost: '+ array[i].toFixed(2).toString()+'$';
                });

                line.set('tooltips', tooltip);
            }

		    // Appending canvas and drawing chart as soon as data is defined
            scope.$watch('data', function(newV, oldV, scope) {
                if (angular.isDefined(newV)) {
 
                    var name = 'name' + id++;
                    element.append('<canvas id="' + name + '" width="600" height="400">[No canvas support]<canvas>');
                    draw(name);
                }
            });


		}

	};
}]);