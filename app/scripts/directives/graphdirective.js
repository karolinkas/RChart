'use strict';

angular.module('rgraphApp').directive('graphDirective', ['$timeout', function($timeout){
	/* jshint unused:false */
	/* global RGraph */	
	return {
		restrict: 'EA',
		scope:{
			data: '=data',
            less: '@less'
		},
		link: function(scope,element,attrs){
            
            function draw(){
                
                var data = scope.data;
                var line = new RGraph.Line({
                id: name,
                data: data.value,
                options: {
                    numxticks: 11,
                    numyticks: 5,
                    backgroundGridVlines: false,
                    backgroundGridBorder: false,
                    colors: ['red'],
                    linewidth: 2,
                    gutterLeft: 60,
                    gutterRight: 60,
                    gutterTop: 50,
                    gutterBottom: 80,
                    labels: data.time,
                    units: {
                            post: 'k$'
                        },
                    shadow: false,
                    noxaxis: true,
                    textSize: 10,
                    textColor: '#999',
                    textAngle: 90,
                    tickmarks: function (obj, data, value, index, x, y, color, prevX, prevY){
                        var co = obj.context;              
                        RGraph.path(co, ['b', 'a', x, y, 3, 0, RGraph.TWOPI, false,'c','f', '#a00']);
                        }
                  }
                }).trace2({frames: 60}).on('beforedraw', function (obj){
                      RGraph.clear(obj.canvas, 'white');
                });
            }
			
            scope.$watch('data', function(newV, oldV, scope) {
                if (angular.isDefined(newV)) {
                    var id = 1;
                    var name = 'name' + id++;
                    console.log(name);
                    element.append('<canvas id='+name+' width="600" height="400">[No canvas support]<canvas>');
                    draw();
                }
            });


		}

	};
}]);