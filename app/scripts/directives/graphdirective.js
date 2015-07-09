'use strict';

angular.module('rgraphApp').directive('graphDirective', ['$timeout','$compile', function($timeout,$compile){
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

		    // Appending canvas and drawing chart as soon as data is defined
            $timeout(function(){
                    var name = 'name' + id++;
                    // placeholder that select tags are gonna be attached to
                    var placeHolder = angular.element('h2'); 
                    element.append('<canvas id="' + name + '" width="600" height="400">[No canvas support]<canvas>');
                    // tags that were in the template before get added dynamically now to make directive more reusable

                    var selectStart = angular.element('<select id="first"'+ 
                                                      'ng-model="first"'+
                                                      'ng-options="index as moment for (index,moment) in data.time">'+
                                                      '<option value="" disabled selected>'+
                                                      'Feb,01'+
                                                      '</option>'+
                                                      '</select>'+
                                                      '<span> and </span>');
                    var selectEnd = angular.element('<select id="last"'+ 
                                                    'ng-model="last"'+ 
                                                    'ng-options="index as moment for (index,moment) in data.time">'+
                                                    '<option value="" disabled selected>'+
                                                    'Mar,07'+
                                                    '</option>'+                   
                                                    '</select>)');
   
                    placeHolder.append(selectStart);
                    placeHolder.append(selectEnd);
                    // compiling them manually since link-function doesn`t have access to the scope
                    $compile(selectStart)(scope);
                    $compile(selectEnd)(scope);

                    draw(name);
            },200);

            // when user selects a new start date chart gets drawn again
            scope.$watch('first', function(newV, oldV, scope) {
                if (angular.isDefined(newV)){
                    if (newV>=0) {
                        // RGraph.Clear();
                        var name = 'name' + id++;
                        angular.element('canvas').remove();
                        element.append('<canvas id="' + name + '" width="600" height="400">[No canvas support]<canvas>');
                        draw(name,newV,last);
                    } 
                }

            });

            // when user selects a new end date chart gets drawn again
            scope.$watch('last', function(newV, oldV, scope) {
                 if (angular.isDefined(newV)){
                    if (newV<35) {
                        var name = 'name' + id++;
                        angular.element('canvas').remove();
                        element.append('<canvas id="' + name + '" width="600" height="400">[No canvas support]<canvas>');
                        draw(name,first,newV);
                    } 
                } 

            });

		}

	};
}]);