(function(angular) {
    
    'use strict';

    function StatsController() {
    }

    angular.module('nursing-timer').component('statsGraph', {
        templateUrl: 'src/stats-graph/view.html',
        controller:StatsController,
        controllerAs: 'vm'
    });

})(window.angular);