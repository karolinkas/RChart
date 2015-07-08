'use strict';

angular.module('rgraphApp').directive('graphDirective', ['$timeout', function($timeout){
	/* jshint unused:false */
	/* global RGraph */	
    var id = 1;
	return {
		restrict: 'A',
		scope:{
			data: '=data',
            first: '=',
            last: '='
		},
		link: function(scope,element,attrs){

            var first = scope.first;
            var last = scope.last;
            
            // creating a draw function according to the guidelines of the RGraph docs   
            function draw(name,first,last){
                
                //cutting data according to selected indizes
                var dataY= scope.data.value.slice(first,last);
                var dataX= scope.data.time.slice(first,last);

                var line = new RGraph.Line({
                id: name,
                data: dataY, 
                options: {
                    backgroundGridVlines: false,
                    backgroundGridBorder: false,
                    colors: ['red'],
                    linewidth: 2,
                    gutterLeft: 60,
                    gutterRight: 60,
                    gutterTop: 50,
                    gutterBottom: 80,
                    labels: dataX,
                    noxaxis: true,
                    units: {
                            post: '$'
                        },
                    shadow: false,
                    textSize: 10,
                    textColor: '#999',
                    textAngle: 90,
                    // crosshairs: true,
                    tickmarks: function (obj, data, value, index, x, y, color, prevX, prevY){
                        var co = obj.context;              
                        RGraph.path(co, ['b', 'a', x, y, 3, 0, RGraph.TWOPI, false,'c','f', '#a00']);
                        }
                  }
                }).trace2({frames: 60}).on('beforedraw', function (obj){
                      RGraph.clear(obj.canvas, 'white');
                });

                // custom tooltip with less decimal places
                var tooltip = dataY.map(function(current,i,array){
                    return 'Cost: '+ array[i].toFixed(2).toString()+'$';
                });

                line.set('tooltips', tooltip);

            }

		    // Appending canvas when data has loaded asynchronously, 
            // I remove the watchtask here since it doesn´t need to watch continously,
            // but only for the initial drawing
            $timeout(function(first,last){
                    var name = 'name' + id++;
                    element.append('<canvas id="' + name + '" width="600" height="400">[No canvas support]<canvas>');
                    draw(name,first,last);
            },100);

          // when user selects a new start date chart gets drawn again
            scope.$watch('first', function(newV, oldV, scope) {
                if (newV>=0) {
                    var name = 'name' + id++;
                    angular.element('canvas').remove();
                    element.append('<canvas id="' + name + '" width="600" height="400">[No canvas support]<canvas>');
                    draw(name,newV,last);
                } 

            });

            // when user selects a new end date chart gets drawn again
            scope.$watch('last', function(newV, oldV, scope) {
                if (newV<35) {
                    var name = 'name' + id++;
                    angular.element('canvas').remove();
                    element.append('<canvas id="' + name + '" width="600" height="400">[No canvas support]<canvas>');
                    draw(name,first,newV);
                } 

            });


		}

	};
}]);