var testApp = angular.module('testApp', []);
testApp.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});
testApp.controller('Test',function Test($scope) {
	$scope.letter = 'AB';
	$scope.index = '12';
	$scope.info = {
		'A':{'1':{value:1},'2':{value:2}},
		'B':{'1':{value:3},'2':{value:4}},
	};
	$scope.size = function() {
		var c = 0;
		for (i in $scope.info) {c++;}
		return c;
	}
	$scope.get = function(i,j) {
		return $scope.info[$scope.letter[i]][$scope.index[j]];
	}
	$scope.inc2 = function() {
		var arr = [[1,0],[2,1]];
		var i, j;
		for (i = 0; i < arr.length; i++) {
			for (j = 0; j < arr[i].length; j++) {
				try {
					$scope.info[$scope.letter[i]][$scope.index[j]].value = arr[i][j];
				} catch (e) {
					$scope.info[$scope.letter[i]][$scope.index[j]].value = 0;
				}
			}
		}
	};
	$scope.inc = function() {
		var i, j;
		for (i = 0; i < $scope.size(); i++) {
			for (j = 0; j < $scope.size(); j++) {
				console.log( 'Add to ' + $scope.letter[i] + $scope.index[j] );
				try {
					$scope.info[$scope.letter[i]][$scope.index[j]].value = parseInt($scope.info[$scope.letter[i]][$scope.index[j]].value) + 1;
				} catch (e) {
					$scope.info[$scope.letter[i]][$scope.index[j]].value = 0;
				}
			}
		}
	}
});


