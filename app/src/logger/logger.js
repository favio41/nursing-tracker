(function(angular) {
	
	'use strict';

	function LoggerController() {

	}

	angular.module('nursing-timer').component('logger', {
		templateUrl: 'src/logger/logger.html',
		controller: LoggerController,
		bindings: {
			// hero: '='
		}
	});

})(window.angular);