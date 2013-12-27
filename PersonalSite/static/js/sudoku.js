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
	$scope.error = false;
	$scope.errorMessage = '';
	$scope.puzzle = {
		'A':{'1':{value:'',solved:false,error:'false'},'2':{value:'',solved:false,error:'false'},'3':{value:'',solved:false,error:'false'},'4':{value:'',solved:false,error:'false'},'5':{value:'',solved:false,error:'false'},'6':{value:'',solved:false,error:'false'},'7':{value:'',solved:false,error:'false'},'8':{value:'',solved:false,error:'false'},'9':{value:'',solved:false,error:'false'}},
		'B':{'1':{value:'',solved:false,error:'false'},'2':{value:'',solved:false,error:'false'},'3':{value:'',solved:false,error:'false'},'4':{value:'',solved:false,error:'false'},'5':{value:'',solved:false,error:'false'},'6':{value:'',solved:false,error:'false'},'7':{value:'',solved:false,error:'false'},'8':{value:'',solved:false,error:'false'},'9':{value:'',solved:false,error:'false'}},
		'C':{'1':{value:'',solved:false,error:'false'},'2':{value:'',solved:false,error:'false'},'3':{value:'',solved:false,error:'false'},'4':{value:'',solved:false,error:'false'},'5':{value:'',solved:false,error:'false'},'6':{value:'',solved:false,error:'false'},'7':{value:'',solved:false,error:'false'},'8':{value:'',solved:false,error:'false'},'9':{value:'',solved:false,error:'false'}},
		'D':{'1':{value:'',solved:false,error:'false'},'2':{value:'',solved:false,error:'false'},'3':{value:'',solved:false,error:'false'},'4':{value:'',solved:false,error:'false'},'5':{value:'',solved:false,error:'false'},'6':{value:'',solved:false,error:'false'},'7':{value:'',solved:false,error:'false'},'8':{value:'',solved:false,error:'false'},'9':{value:'',solved:false,error:'false'}},
		'E':{'1':{value:'',solved:false,error:'false'},'2':{value:'',solved:false,error:'false'},'3':{value:'',solved:false,error:'false'},'4':{value:'',solved:false,error:'false'},'5':{value:'',solved:false,error:'false'},'6':{value:'',solved:false,error:'false'},'7':{value:'',solved:false,error:'false'},'8':{value:'',solved:false,error:'false'},'9':{value:'',solved:false,error:'false'}},
		'F':{'1':{value:'',solved:false,error:'false'},'2':{value:'',solved:false,error:'false'},'3':{value:'',solved:false,error:'false'},'4':{value:'',solved:false,error:'false'},'5':{value:'',solved:false,error:'false'},'6':{value:'',solved:false,error:'false'},'7':{value:'',solved:false,error:'false'},'8':{value:'',solved:false,error:'false'},'9':{value:'',solved:false,error:'false'}},
		'G':{'1':{value:'',solved:false,error:'false'},'2':{value:'',solved:false,error:'false'},'3':{value:'',solved:false,error:'false'},'4':{value:'',solved:false,error:'false'},'5':{value:'',solved:false,error:'false'},'6':{value:'',solved:false,error:'false'},'7':{value:'',solved:false,error:'false'},'8':{value:'',solved:false,error:'false'},'9':{value:'',solved:false,error:'false'}},
		'H':{'1':{value:'',solved:false,error:'false'},'2':{value:'',solved:false,error:'false'},'3':{value:'',solved:false,error:'false'},'4':{value:'',solved:false,error:'false'},'5':{value:'',solved:false,error:'false'},'6':{value:'',solved:false,error:'false'},'7':{value:'',solved:false,error:'false'},'8':{value:'',solved:false,error:'false'},'9':{value:'',solved:false,error:'false'}},
		'I':{'1':{value:'',solved:false,error:'false'},'2':{value:'',solved:false,error:'false'},'3':{value:'',solved:false,error:'false'},'4':{value:'',solved:false,error:'false'},'5':{value:'',solved:false,error:'false'},'6':{value:'',solved:false,error:'false'},'7':{value:'',solved:false,error:'false'},'8':{value:'',solved:false,error:'false'},'9':{value:'',solved:false,error:'false'}},
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
	$scope.setErrorState = function(i,j,state) {
		$scope.puzzle[$scope.letter[i]][$scope.index[j]].error = state;
	};
	$scope.getPuzzleArray = function() {
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
		return puzzle;
	};
	$scope.solve = function() {
		if ($scope.solving) {return;}
		else {$scope.clearSolvedState();}
		$scope.solving = true;
		$scope.solved = false;
		var puzzle = $scope.getPuzzleArray();
		if (!$scope.validatePuzzle(puzzle)) {
			$scope.solving = false;
			$scope.error = true;
			return;
		} else {
			$scope.clearError();
		}
		try {
			return Dajaxice.sudoku.solve($scope.solve_cb,{'puzzle':puzzle});
		} catch (e) {
			$scope.errorMessage = 'System error - call to server failed';
			$scope.error = true;
			return;
		}
	};
	$scope.solve_cb = function(json) {
		if (!json.solved) {
			console.log('No solution found');
			$scope.solving = false;
			$scope.resetPuzzleState();
			$scope.$apply();
			return;
		}
		$scope.solved = json.solved;
		$scope.time = json.time;
		$scope.update(json.puzzle);
		$scope.solving = false;
		$scope.error = false;
		$scope.clearErrorState();
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
	$scope.resetPuzzleState = function() {
		$scope.clearSolvedState();
		$scope.solved = false;
		$scope.clearError();
	};
	$scope.clearError = function() {
		$scope.errorMessage = '';
		$scope.error = false;
		$scope.clearErrorState();
	};
	$scope.validatePuzzle = function(puzzle) {
		$scope.clearErrorState();
		var i, j, k, I, J;
		for (i = 0; i < puzzle.length; i++) {
			for (j = 0; j < puzzle[i].length; j++) {
				// check row
				for (k = j+1; k < 9; k++) {
					if ( j != k && puzzle[i][j] != 0 && puzzle[i][j] == puzzle[i][k] ) {
						$scope.setErrorState(i,j,true);
						$scope.setErrorState(i,k,true);
						$scope.errorMessage = 'Repeated ' + puzzle[i][j] + ' in row ' + (i+1);
						return false;
					}
				}
				// check col
				for (k = i+1; k < 9; k++) {
					if ( i != k && puzzle[i][j] != 0 && puzzle[i][j] == puzzle[k][j] ) {
						$scope.setErrorState(i,j,true);
						$scope.setErrorState(k,j,true);
						$scope.errorMessage = 'Repeated ' + puzzle[i][j] + ' in column ' + (k+1);
						return false;
					}
				}
				// check box
				for (k = (i%3)*3 + j%3+1; k < 9; k++) {
					I = i - (i%3) + parseInt(k/3);
					J = j - (j%3) + k%3;
					if ( !(I == i && J == j) && puzzle[i][j] != 0 && puzzle[i][j] == puzzle[I][J] ) {
						$scope.setErrorState(i,j,true);
						$scope.setErrorState(I,J,true);
						$scope.errorMessage = 'Repeated ' + puzzle[i][j] + ' in the ' + $scope.getBoxName(i,j) + ' box';
						return false;
					}
				}
			} 
		}
		return true;
	};
	$scope.check = function(reportClear) {
		var puzzle = $scope.getPuzzleArray();
		$scope.errorMessage = '';
		$scope.error = !$scope.validatePuzzle(puzzle);
		if (!$scope.error && reportClear) {
			$scope.clearError();
			$scope.errorMessage = 'No error found!';
		} else {
			$scope.solved = false;
		}
	};
	$scope.clear = function() {
		var i, j;
		for (i = 0; i < 9; i++) {
			for (j = 0; j < 9; j++) {
				$scope.set(i,j,'');
			}
		}
		$scope.resetPuzzleState();
	};
	$scope.clearErrorState = function() {
		var i, j;
		for (i = 0; i < 9; i++) {
			for (j = 0; j < 9; j++) {
				$scope.setErrorState(i,j,false);
			}
		}	
	};
	$scope.clearSolvedState = function() {
		var i, j;
		for (i = 0; i < 9; i++) {
			for (j = 0; j < 9; j++) {
				$scope.setSolvedState(i,j,false);
			}
		}
	};
	$scope.getBoxName = function(i,j) {
		var name = "";
		switch (i) {
			case 0:case 1:case 2:
				name += "upper";
				break;
			case 3:case 4:case 5:
				name += "middle";
				break;
			case 6:case 7:case 8:
				name += "bottom";
		}
		name += " ";
		switch (j) {
			case 0:case 1:case 2:
				name += "left";
				break;
			case 3:case 4:case 5:
				name += "center";
				break;
			case 6:case 7:case 8:
				name += "right";
		}
		name = (name == 'middle center' ? 'center' : name);
		return name;	
	};
	$scope.clearCellState = function(letterIndex) {
		$scope.setSolvedState($scope.letter.indexOf(letterIndex[0]),$scope.index.indexOf(letterIndex[1]),false);
	};
});
function count(arr, n) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == n) {
			count++;
		}
	}
	return count;
}


