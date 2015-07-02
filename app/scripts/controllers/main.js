'use strict';

angular.module('rgraphApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'me',
      'you',
      'everyone'
    ];

    $http.get('/files/Sample_data.json')
       .success(function(data){
   				
   				console.log(data);

   				//for (var key in data) {
					//    if (data.hasOwnProperty(key)) {
					//        var obj = data[key];
					//         for (var prop in obj) {
					//           if(obj.hasOwnProperty(prop)){
					//           	var innerobj = obj[prop];
					//           	console.log(innerobj);
					//           	// var i = 0;
					//           	// for (var i; i=innerobj.length;i++){
					//            // 		var array = Object.keys(innerobj).map(function (key) {return innerobj[key];});
					//            // 	}
					//           }
					//        }
					//     }
					// }

        	var array = Object.keys(data).map(function (key) {return data[key];});   
        	console.log(array); 	
          
          $scope.complete = array[0]; 

        });

  });
