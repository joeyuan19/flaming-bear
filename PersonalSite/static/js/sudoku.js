/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 *
 *  Angular.js Sudoku Solver Interface
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * To do:
 *   [ ] Error checking
 *   [ ] Loading animation...
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var sudokuApp = angular.module('sudokuApp', []);
sudokuApp.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});
sudokuApp.controller('Puzzle',function Puzzle($scope) {
	$scope.letter = "ABCDEFGHI";
	$scope.index  = "123456789";
	$scope.time = 0;
	$scope.solved = false;
	$scope.solving = false;
	$scope.puzzle = {
		'A':{'1':{value:''},'2':{value:''},'3':{value:''},'4':{value:''},'5':{value:''},'6':{value:''},'7':{value:''},'8':{value:''},'9':{value:''}},
		'B':{'1':{value:''},'2':{value:''},'3':{value:''},'4':{value:''},'5':{value:''},'6':{value:''},'7':{value:''},'8':{value:''},'9':{value:''}},
		'C':{'1':{value:''},'2':{value:''},'3':{value:''},'4':{value:''},'5':{value:''},'6':{value:''},'7':{value:''},'8':{value:''},'9':{value:''}},
		'D':{'1':{value:''},'2':{value:''},'3':{value:''},'4':{value:''},'5':{value:''},'6':{value:''},'7':{value:''},'8':{value:''},'9':{value:''}},
		'E':{'1':{value:''},'2':{value:''},'3':{value:''},'4':{value:''},'5':{value:''},'6':{value:''},'7':{value:''},'8':{value:''},'9':{value:''}},
		'F':{'1':{value:''},'2':{value:''},'3':{value:''},'4':{value:''},'5':{value:''},'6':{value:''},'7':{value:''},'8':{value:''},'9':{value:''}},
		'G':{'1':{value:''},'2':{value:''},'3':{value:''},'4':{value:''},'5':{value:''},'6':{value:''},'7':{value:''},'8':{value:''},'9':{value:''}},
		'H':{'1':{value:''},'2':{value:''},'3':{value:''},'4':{value:''},'5':{value:''},'6':{value:''},'7':{value:''},'8':{value:''},'9':{value:''}},
		'I':{'1':{value:''},'2':{value:''},'3':{value:''},'4':{value:''},'5':{value:''},'6':{value:''},'7':{value:''},'8':{value:''},'9':{value:''}},
	};
	$scope.get = function(i,j) {
		var val = $scope.puzzle[$scope.letter[i]][$scope.index[j]].value;
		if (val.length == 1 && ('0' <= val && val <= '9') ) {
			return parseInt(val);
		} else {
			return 0;
		}
	};
	$scope.set = function(i,j,new_value) {
		if (0 <= new_value && new_value <= 9) {
			$scope.puzzle[$scope.letter[i]][$scope.index[j]].value = '' + new_value;
		} else {
			$scope.puzzle[$scope.letter[i]][$scope.index[j]].value = '';
		}
}
	$scope.solve = function() {
		$scope.solving = true;
		var puzzle = new Array(9), i, j;
		for (i = 0; i < 9; i++) {
			puzzle[i] = new Array(9);
			for (j = 0; j < 9; j++) {
				puzzle[i][j] = $scope.get(i,j);
			}
		}
		return Dajaxice.sudoku.solve($scope.solve_cb,{'puzzle':puzzle});
	};
	$scope.solve_cb = function(json) {
		if (!json.solved) {
			console.log('No solution found');
			$scope.solved = false;
			$scope.solving = false;
			$scope.$apply();
			return;
		}
		$scope.solved = json.solved;
		$scope.time = json.time;
		$scope.update(json.puzzle);
		$scope.solving = false;
		$scope.$apply();
	};
	$scope.update = function(a) {
		var i, j;
		for (i = 0; i < 9; i++) {
			for (j = 0; j < 9; j++) {
				$scope.set(i,j,a[i][j]);
			}
		} 
	};
	$scope.clear = function() {
		var i, j;
		for (i = 0; i < 9; i++) {
			for (j = 0; j < 9; j++) {
				$scope.set(i,j,'');
			}
		} 
		$scope.solved = false;
	};
});



