(function(angular) {
	
	'use strict';

	function LogEntryController() {

		
	}

	angular.module('nursing-timer').component('logEntry', {
		templateUrl: 'src/log-entry/view.html',
		controller: LogEntryController,
		controllerAs: 'vm',
		bindings: {
			log: '=',
			onDelete: '='
		}
	});

})(window.angular);