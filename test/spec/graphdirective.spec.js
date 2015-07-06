'use strict';

describe('Directive: graphDirective', function() {
    
    var scope, compile;
    
    beforeEach(module('rgraphApp'));
    
    beforeEach(inject(function($compile, $rootScope){

        scope = $rootScope.$new();
        compile = $compile;

    }));
    
    // attaching scope to compiled element
    function create() {
        var elem, compiledElem;
        elem = angular.element('<div graph-directive></div>');
        compiledElem = compile(elem)(scope);
        scope.data = {},
        scope.$digest(); // jshint ignore:line
        
        return compiledElem;    
    }
    
    
    it('directive should be created', function() {
        var el = create();
        expect(el.length).toBe(1);
    });
   
});