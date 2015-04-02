/**
 * Created by Airofsummer on 01.04.2015.
 */
angular.module("ChatApp").config(function($routeProvider){
    $routeProvider.when('/new', {
        templateUrl: '/cactus/pages/newContact_frag.html '
    })
        .when('/profile', {
            templateUrl: '/cactus/pages/profile_frag.html ',
            controller: function($http, $scope){
                $http.get("/server/user/999")
                    .success(function(response) {$scope.settingsInfo = response; });
            }
        })
        .when('/contacts', {
            templateUrl: '/cactus/pages/contacts_frag.html ',
            controller: function($http, $scope){
                $http.get("../cactus/pages/chats/contacts.json")
                    .success(function(response) {$scope.contactLists = response;});
            }
        })
        .otherwise({redirectTo: '/'});
});