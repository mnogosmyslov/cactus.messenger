/**
 * Created by Airofsummer on 09.04.2015.
 */
angular.module("LandApp").config(function($routeProvider){
    $routeProvider.when('/sign_up', {
        templateUrl: '/cactus/pages/sign_up.html ',
        controller: 'TabsCtrl'
        })
        .otherwise({redirectTo: '/'});
});