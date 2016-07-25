(function(angular, moment) {
	
	'use strict';

	function Log(type){
		this.type = type;
		this.start = moment();
	}

	function Eat(){
		Log.call(this, 'Eat');
	}
	angular.extend(Eat.prototype, Log.prototype);

	function Activity(){
		Log.call(this, 'Activity');
	}
	angular.extend(Activity.prototype, Log.prototype);

	function Sleep(){
		Log.call(this, 'Sleep');
	}
	angular.extend(Sleep.prototype, Log.prototype);

	function Diaper(){
		Log.call(this, 'Diaper');
	}
	angular.extend(Diaper.prototype, Log.prototype);

	function Other(){
		Log.call(this, 'Other');
	}
	angular.extend(Other.prototype, Log.prototype);


	function LogFactory(entryType) {
		if(entryType == 'Eat')
			return new Eat();
		if(entryType == 'Activity')
			return new Activity();
		if(entryType == 'Sleep')
			return new Sleep();
		if(entryType == 'Diaper')
			return new Diaper();
		if(entryType == 'Other')
			return new Other();
		else
			throw new Error('Unknow entry type: '+entryType);
	}

	angular.module('nursing-timer').service('LogFactory', function() { return LogFactory; });

})(window.angular, window.moment);