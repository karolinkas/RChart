describe('Directive: graphDirective', function() {
    
    var scope, compile, validHTML;;
    
    beforeEach(module('rgraphApp'));
    
    beforeEach(inject(function($compile, $rootScope, $templateCache){

        scope = $rootScope.$new();
        compile = $compile;
    }));
    
    function create() {
        var elem, compiledElem;
        elem = angular.element('<div graph-directive></div>');
        compiledElem = compile(elem)(scope);
        scope.data = {},
        scope.$digest();
        
        return compiledElem;    
    }
    
    
    it('directive should be created', function() {
        var el = create();
        expect(el.length).toBe(1);
    });

    
});