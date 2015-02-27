/**
 * Created by Airofsummer on 18.02.2015.
 */
angular.module('LandApp', ['ui.bootstrap', "ui.router", "ngAnimate"]);

angular.module('LandApp').controller("TabsCtrl", function($rootScope, $scope, $http, $location){
    ////$http.defaults.headers.post["Content-Type"] = 'application/json; charset=utf-8';
    //$scope.tabs = [{
    //    title: 'Sign in',
    //    url: 'one.tpl.html'
    //}, {
    //    title: 'Sign up',
    //    url: 'two.tpl.html'
    //}];
    //$scope.currentTab = 'one.tpl.html';
    //
    //$scope.onClickTab = function (tab) {
    //    $scope.currentTab = tab.url;
    //};
    //
    //$scope.isActiveTab = function(tabUrl) {
    //    return tabUrl == $scope.currentTab;
    //};
    //$scope.login = function(){
    //    var data = "j_username="+$scope.username+"&j_password="+$scope.password+"&submit=Login";
    //    $http.post('/j_spring_security_check', data, {
    //        headers: {
    //            "Content-Type": "application/x-www-form-urlencoded"
    //        }
    //    }).
    //        success(function(data, status, headers, config) {
    //            console.info("You're now logged in, welcome "+$scope.username);
    //        }).
    //        error(function(data, status, headers, config){
    //            console.warn('This is a wrong username or/and a wrong password. Try again');
    //            setTimeout(function(){jQuery('#loginAlert').hide();},4000);
    //        });
    //};
    $scope.postSignUp = function(){
        var mydata = {"email": $scope.email, "login": $scope.username, "password": $scope.password};
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