(function(angular, localStorage) {
	
	'use strict';

	function CategoryController($interval, $scope, LogFactory) {
		var self = this;

		function saveCategories(){
			localStorage.setItem("categories", LogFactory.dehidrate(self.categories));
		}

		var storagedCategories = localStorage.getItem("categories");

		if(storagedCategories) {
			storagedCategories = JSON.parse(storagedCategories);
			self.categories = {}
			Object.keys(storagedCategories).forEach(function(k){
				if(storagedCategories[k])
					storagedCategories[k] = LogFactory.hidrate(storagedCategories[k]);
				
				self.categories[k] = storagedCategories[k];
			})
		}
		else {
			self.categories = {
				'Eat': null,
				'Sleep': null,
				'Diaper': null,
				'Activity': null,
				'Meds': null,
				'Other': null
			};
			saveCategories();
		}
		
		$interval(function(){
		// 	$scope.$apply();
		}, 30000);

		self.newEntry = function(entry){
			var key = moment().format('YYYY-MM-DD')
			var logs = localStorage.getItem("logs-"+key);

			if(!logs)
				logs = '';

			if(self.categories[entry]) {
				self.categories[entry].finish();
				logs += LogFactory.dehidrate(self.categories[entry])+"\n";
				localStorage.setItem("logs-"+key, logs);
			}
			self.categories[entry] = new LogFactory(entry, null, !(self.categories[entry] && self.categories[entry].active));
			saveCategories();


		}
	}

	angular.module('nursing-timer').component('category', {
		templateUrl: 'src/category/view.html',
		controller: CategoryController,
		controllerAs: 'vm',
		bindings: {
			// log: '='
		}
	});

})(window.angular, window.localStorage);