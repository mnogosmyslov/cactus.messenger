/**
 * Created by Airofsummer on 01.04.2015.
 */
angular.module("ChatApp").config(function($routeProvider){
    $routeProvider.when('/new', {
        templateUrl: '/newContact_frag.html',
        controller: function(){alert("KKKKKEEEEKKK");}
    });
});