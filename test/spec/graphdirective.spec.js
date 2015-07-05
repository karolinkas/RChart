describe('Directive: spinInput', function() {
    
    var scope, compile, validHTML;;
    
    validHTML = '<canvas></canvas>';
    
    beforeEach(module('rgraphApp'));
    
    beforeEach(inject(function($compile, $rootScope, $templateCache){

        scope = $rootScope.$new();
        compile = $compile;
    }));
    
    function create() {
        var elem, compiledElem;
        elem = angular.element(validHTML);
        compiledElem = compile(elem)(scope);
        scope.data = {},
        scope.$digest();
        
        return compiledElem;    
    }
    
    
    it('canvas should be created', function() {
        var el = create();
        expect(el.length).toBe(1);
    });
    
    
});