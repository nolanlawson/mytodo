'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
	.controller('MainCtrl', ['$scope', function($scope) {
		var todosInStore = localStorage['todos'];

		$scope.todos = todosInStore && todosInStore.split('\n') || [];

		$scope.$watch('todos', function() {
			localStorage['todos'] = $scope.todos.join('\n');
		}, true);

		$scope.addTodo = function() {
			$scope.todos.push($scope.todo);
			$scope.todo = '';
		};
		$scope.removeTodo = function(index) {
			$scope.todos.splice(index, 1);
		};
	}]);