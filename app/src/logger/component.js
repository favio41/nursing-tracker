(function(angular) {
	
	'use strict';

	function LoggerController(LogFactory) {

		var self = this;

		self.logs = [];
		self.currentLog;

		self.createNewEntry = function(entryType){
			if(!self.currentLog || (self.currentLog.type != entryType) )
			{
				self.currentLog = LogFactory(entryType);
				self.logs.unshift(self.currentLog);
			}
		}

		self.createNewEntry('Eat');
	}

	angular.module('nursing-timer').component('logger', {
		templateUrl: 'src/logger/view.html',
		controller: LoggerController,
		controllerAs: 'vm',
		bindings: {
			// hero: '='
		}
	});

})(window.angular);