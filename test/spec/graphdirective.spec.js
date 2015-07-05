'use strict';

describe('Directive: graphDirective', function () {

  // load the directive's module and view
  beforeEach(module('rgraphApp'));

  var element, scope;

  beforeEach(function () {
      element = angular.element('<div graph-directive data=\'data\'>'+'</div>')
  
  });

  it('should attach a canvas element', function () {
    expect(element.length).toBe(1);
  });



});