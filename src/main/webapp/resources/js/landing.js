/**
 * Created by Airofsummer on 14.01.2015.
 */
    angular.module('LandApp', ['ui.bootstrap', "ui.router", "ngAnimate"]);
    angular.module('LandApp').controller('ModalCtrl', function ($scope, $modal) {

        $scope.open = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'myModal.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: { },
                backdrop: true,
                backdropClass: 'backdrop',
                windowClass: 'fuckshadows'
            });

        };
        $scope.master = {};

        $scope.check = function(user) {
            $scope.master = angular.copy(user);
        };
    });

    angular.module('LandApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
        $scope.ok = function () {
            $modalInstance.close();
        };
    });

    angular.module('LandApp').config(function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state("foo", {
                url: "/foo",
                template: '<div ng-include="\'/pages/sign_up.html\'"></div>'
            })
            .state("bar", {
                url: "/bar",
                template: '<div id="signpop" ng-include="\'/pages/sign_in.html\'"></div>'
            });

        $urlRouterProvider.otherwise("/bar");
    });

