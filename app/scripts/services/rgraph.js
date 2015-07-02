'use strict';

angular.module('rgraphApp', [])
  .factory('rGraph', ['$document', '$q', '$rootScope', function($document, $q, $rootScope) {
    var d = $q.defer();
    function onScriptLoad() {
      // Load client in the browser
      $rootScope.$apply(function() { d.resolve(window.d3); });
    }
    // Create a script tag with d3 as the source
    // and call our onScriptLoad callback when it
    // has been loaded
    var scriptTag = $document[0].createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.src = 'scripts/RGraph.common.core.js';
    scriptTag.onreadystatechange = function () {
    if (this.readyState === 'complete') { onScriptLoad(); }
  };
  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);

  return {
    rGraph: function() { return d.promise; }
  };
}]);
