/**
 * Created by Airofsummer on 14.01.2015.
 */
    angular.module('LandApp', ['ui.bootstrap', "ui.router", "ngAnimate"]);
    angular.module('LandApp').controller('ModalCtrl',function ($scope, $modal) {

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
    }).directive('shakeThat', ['$animate', function($animate) {

        return {
            require: '^form',
            scope: {
                submit: '&',
                submitted: '='
            },
            link: function(scope, element, attrs, form) {

                // listen on submit event
                element.on('submit', function() {

                    // tell angular to update scope
                    scope.$apply(function() {

                        // everything ok -> call submit fn from controller
                        if (form.$valid) return scope.submit();

                        // show error messages on submit
                        scope.submitted = true;

                        // shake that form
                        $animate.addClass(element, 'shake', function() {
                            $animate.removeClass(element, 'shake');
                        });

                    });

                });

            }
        };

    }]);

    angular.module('LandApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
        $scope.ok = function () {
            $modalInstance.close();
        };
    });

    //angular.module('LandApp').config(function($stateProvider, $urlRouterProvider){
    //
    //    $stateProvider
    //        .state("foo", {
    //            url: "/foo",
    //            template: '<div ng-include="\'/pages/sign_up.html\'"></div>'
    //        })
    //        .state("bar", {
    //            url: "/bar",
    //            template: '<div id="signpop" ng-include="\'/pages/sign_in.html\'"></div>'
    //        });
    //
    //    $urlRouterProvider.otherwise("/bar");
    //});

