(function(angular) {
	
	'use strict';

	function ActiveLogEntryController() {
	}

	angular.module('nursing-timer').component('activeLogEntry', {
		templateUrl: 'src/active-log-entry/view.html',
		controller: ActiveLogEntryController,
		controllerAs: 'vm',
		bindings: {
			log: '='
		}
	});

})(window.angular);