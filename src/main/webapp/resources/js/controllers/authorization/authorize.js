/**
 * Created by Airofsummer on 18.02.2015.
 */
angular.module('LandApp', ["ui.router", "ngAnimate"]);

angular.module('LandApp').controller("TabsCtrl", function($rootScope, $scope, $http){
    $scope.postSignUp = function(){
        var mydata = {"name": $scope.name, "email": $scope.email, "login": $scope.username, "password": $scope.password};
        $http({
            method: 'POST',
            url: '/cactus/user/new',
            data: mydata,
            success: (function(data, status, headers, config) {
                console.info("You're now logged in, welcome "+$scope.username);
            }),
            error: (function(data, status, headers, config){
                console.warn('This is a wrong username or/and a wrong password. Try again');
                setTimeout(function(){jQuery('#loginAlert').hide();},4000);
            })
        })
    };
});