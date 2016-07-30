(function(angular) {
	
	'use strict';

	function CategoryEntryController() {
	}

	angular.module('nursing-timer').component('categoryEntry', {
		templateUrl: 'src/category-entry/view.html',
		controller: CategoryEntryController,
		controllerAs: 'vm',
		bindings: {
			entry: '=',
			category: '=',
			newEntry: '=',
		}
	});

})(window.angular);