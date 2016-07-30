angular
    .module('nursing-timer', ['ngRoute', 'ngMaterial'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/dashboard', {
            templateUrl: 'src/pages/dashboard.html',
        })
        .otherwise('dashboard')
        // .when('/Book/:bookId/ch/:chapterId', {
        //   templateUrl: 'chapter.html',
        //   controller: 'ChapterController'
        // });

        // configure html5 to get links working on jsfiddle
        // $locationProvider.html5Mode(true);
    })
    .config(function($mdThemingProvider, $mdIconProvider){

        // $mdIconProvider
        //     .defaultIconSet("./assets/svg/avatars.svg", 128)
        //     .icon("menu"       , "./assets/svg/menu.svg"        , 24)
        //     .icon("share"      , "./assets/svg/share.svg"       , 24)
        //     .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
        //     .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
        //     .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
        //     .icon("phone"      , "./assets/svg/phone.svg"       , 512);

            $mdThemingProvider.theme('default')
            .primaryPalette('pink')
            .accentPalette('orange');

    });