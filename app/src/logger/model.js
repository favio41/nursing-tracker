(function(angular, moment) {
	
	'use strict';

	function Log(type, start){
		this.type = type;
		this.start = start;
	}
	Log.prototype.finish = function(){
		this.end = moment();
	}
	Log.prototype.fromNow = function(){
		var duration = moment.duration(moment().diff(this.start));
		var hours = Math.floor(duration.asHours());
		var minutes = Math.floor(duration.asMinutes())-hours*60;
		// if(hours == 0 && minutes == 0)
		// 	return 'Seconds ago'
		if(hours <= 10)
			hours = '0'+hours;
		if(minutes <= 10)
			minutes = '0'+minutes;
		return hours + ':' + minutes;
	}

	function DiscontinuousLog(type, start, active){
		Log.call(this, type, start);
		this.discontinous = true;
		this.active = active;	
	}
	DiscontinuousLog.prototype.getText = function(){
		return this.active? this.activeText : this.inactiveText;
	}
	angular.extend(DiscontinuousLog.prototype, Log.prototype);


	function Sleep(start, active){
		DiscontinuousLog.call(this, 'Sleep', start, active);
		this.activeText = 'Sleeping';
		this.inactiveText = 'Awake';
	}
	angular.extend(Sleep.prototype, DiscontinuousLog.prototype);

	function Activity(start, active){
		DiscontinuousLog.call(this, 'Activity', start, active);
		this.activeText = 'Play time';
		this.inactiveText = 'Not active';
	}
	angular.extend(Activity.prototype, DiscontinuousLog.prototype);


	function LogFactory(type, start, active) {
		var discontinous = true;
		if(!start)
			start = moment();

		if(type == 'Sleep')
			return new Sleep(start, active);
		if(type == 'Activity')
			return new Activity(start, active);

		return new Log(type, start);
	}

	LogFactory.dehidrate = function(log){
		return JSON.stringify(log);
	}

	LogFactory.hidrate = function(obj){
		return LogFactory(obj.type, moment(obj.start), obj.active);
	}

	angular.module('nursing-timer').service('LogFactory', function() { return LogFactory; });

})(window.angular, window.moment);