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
		'A':{'1':{value:'',solved:false},'2':{value:'',solved:false},'3':{value:'',solved:false},'4':{value:'',solved:false},'5':{value:'',solved:false},'6':{value:'',solved:false},'7':{value:'',solved:false},'8':{value:'',solved:false},'9':{value:'',solved:false}},
		'B':{'1':{value:'',solved:false},'2':{value:'',solved:false},'3':{value:'',solved:false},'4':{value:'',solved:false},'5':{value:'',solved:false},'6':{value:'',solved:false},'7':{value:'',solved:false},'8':{value:'',solved:false},'9':{value:'',solved:false}},
		'C':{'1':{value:'',solved:false},'2':{value:'',solved:false},'3':{value:'',solved:false},'4':{value:'',solved:false},'5':{value:'',solved:false},'6':{value:'',solved:false},'7':{value:'',solved:false},'8':{value:'',solved:false},'9':{value:'',solved:false}},
		'D':{'1':{value:'',solved:false},'2':{value:'',solved:false},'3':{value:'',solved:false},'4':{value:'',solved:false},'5':{value:'',solved:false},'6':{value:'',solved:false},'7':{value:'',solved:false},'8':{value:'',solved:false},'9':{value:'',solved:false}},
		'E':{'1':{value:'',solved:false},'2':{value:'',solved:false},'3':{value:'',solved:false},'4':{value:'',solved:false},'5':{value:'',solved:false},'6':{value:'',solved:false},'7':{value:'',solved:false},'8':{value:'',solved:false},'9':{value:'',solved:false}},
		'F':{'1':{value:'',solved:false},'2':{value:'',solved:false},'3':{value:'',solved:false},'4':{value:'',solved:false},'5':{value:'',solved:false},'6':{value:'',solved:false},'7':{value:'',solved:false},'8':{value:'',solved:false},'9':{value:'',solved:false}},
		'G':{'1':{value:'',solved:false},'2':{value:'',solved:false},'3':{value:'',solved:false},'4':{value:'',solved:false},'5':{value:'',solved:false},'6':{value:'',solved:false},'7':{value:'',solved:false},'8':{value:'',solved:false},'9':{value:'',solved:false}},
		'H':{'1':{value:'',solved:false},'2':{value:'',solved:false},'3':{value:'',solved:false},'4':{value:'',solved:false},'5':{value:'',solved:false},'6':{value:'',solved:false},'7':{value:'',solved:false},'8':{value:'',solved:false},'9':{value:'',solved:false}},
		'I':{'1':{value:'',solved:false},'2':{value:'',solved:false},'3':{value:'',solved:false},'4':{value:'',solved:false},'5':{value:'',solved:false},'6':{value:'',solved:false},'7':{value:'',solved:false},'8':{value:'',solved:false},'9':{value:'',solved:false}},
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
	};
	$scope.setSolvedState = function(i,j,state) {
		$scope.puzzle[$scope.letter[i]][$scope.index[j]].solved = state;
	};
	$scope.solve = function() {
		$scope.solving = true;
		var puzzle = new Array(9), i, j, val;
		for (i = 0; i < 9; i++) {
			puzzle[i] = new Array(9);
			for (j = 0; j < 9; j++) {
				val = $scope.get(i,j);
				puzzle[i][j] = val;
				if (val == 0) {
					$scope.setSolvedState(i,j,true);
				}
			}
		}
		try {
			return Dajaxice.sudoku.solve($scope.solve_cb,{'puzzle':puzzle});
		} catch (e) {
			console.log("Dajaxice Call Failed");
			$scope.clearSolved(state);
			$scope.solving = false;
			return;
		}
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
		$scope.clearSolvedState();
		$scope.solved = false;
	};
	$scope.clearSolvedState = function() {
		var i, j;
		for (i = 0; i < 9; i++) {
			for (j = 0; j < 9; j++) {
				$scope.setSolvedState(i,j,false);
			}
		}	
	}
});



