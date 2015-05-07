/**
 * Created by Airofsummer on 01.04.2015.
 */
angular.module("chatApp").config(function($routeProvider){
    $routeProvider.when('/new', {
        templateUrl: '/cactus/pages/newContact_frag.html '
    })
        .when('/profile', {
            templateUrl: '/cactus/pages/profile_frag.html ',
            animation: 'second'
        })
        .when('/contacts', {
            templateUrl: '/cactus/pages/contacts_frag.html ',
            animation: "third"
        })
        .when('/settings', {
            templateUrl: '/cactus/pages/settings_frag.html ',
            animation: 'second'
        })
        .otherwise({
            redirectTo: '/',
            animation: 'second'
        });
});