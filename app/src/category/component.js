(function(angular, localStorage) {
	
	'use strict';

	function CategoryController($interval, $scope, LogFactory) {
		var self = this;

		self.name = localStorage.getItem("user-name") || 'Name';

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
				'Ate': null,
				'Sleep': null,
				'Diaper': null,
				'Activity': null,
				'Meds': null,
				'Other': null
			};
			saveCategories();
		}
		
		//This allows the scope to refresh each 30 secons, and display changes in
		//the clocks.
		$interval(function(){}, 30000);

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

		self.changeName = function(){
			var person = prompt("Please enter the new name", "");
			    
			if (person != null) {
				self.name = person;
				localStorage.setItem("user-name", person);
			}
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