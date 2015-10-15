var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {
	$scope.quotes = dataService.getData();

	$scope.add = function(object) {
		dataService.addData(object);
	}

	$scope.remove = function(quote) {
		dataService.removeData(quote);
	}

	$scope.filter = function(author) {
		dataService.filterData(author);
	}

});