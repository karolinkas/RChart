describe('graphDirective', function () {
  var element, scope;

  beforeEach(module('rgraphApp'));

  beforeEach(inject(function($rootScope, $compile){

    element = angular.element('<div graph-directive data="data">'+'</div>');

    scope = $rootScope.$new();
    scope.data = []; 

    $compile(element)(scope);
    $scope.$digest();

    it('should create canvas', function() {
      var canvas = element.find('canvas');
      expect(canvas.length).toBe(1);
    }) 

  }));

});