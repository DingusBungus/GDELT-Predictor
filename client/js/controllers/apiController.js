angular.module('results').controller('API_Controller',
	function($scope, $http) {
	  $scope.results;

	  $scope.ready = false;

	  $scope.api_call = function() {
	  	console.log('hi!');
	  	$http.get('http://api.gdeltproject.org/api/v1/gkg_geojson').then(
		  	function(response) {
		  		//if (response.status == 404) {
		  		//	console.log('Ya done fucked up');
		  		//} else {
					  $scope.results = response.data;
					  console.log("Test " + response.status + ": " + $scope.results);
					  $scope.ready = true;
					//}
		  	}
		  );
	  };
	}
);