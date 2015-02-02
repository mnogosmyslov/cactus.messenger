/**
 * Created by Airofsummer on 30.01.2015.
 */
    angular.module('ChatApp', ['ui.bootstrap', "ui.router"]);

    angular.module('ChatApp').controller('Settings', function ($scope, $modal) {
        $scope.open = function (size) {

            var modalInstance = $modal.open ({
                templateUrl: 'settingsModal.html',
                controller: 'ModalSettings',
                size: size,
                resolve: { },
                backdrop: true
            });

        };

    }).controller('Contacts', function ($scope, $modal) {
            $scope.open = function (size) {

                var modalInstance = $modal.open ({
                    templateUrl: 'contactsModal.html',
                    controller: 'ModalContacts',
                    size: size,
                    resolve: { },
                    backdrop: true
                });

            };

        }).controller("ChatApi", function($scope){
        $scope.chats = [{
            title: 'Dark Daddy',
            url: 'one.tpl.html'
        }, {
            title: 'policebox',
            url: 'two.tpl.html'
        }];
        $scope.currentChat = 'one.tpl.html';

        $scope.onClickChat = function (tab) {
            $scope.currentChat = tab.url;
        };

        $scope.isActiveChat = function(chatUrl) {
            return chatUrl == $scope.currentChat;
        };
    });

    angular.module('ChatApp').controller('ModalSettings', function ($scope, $modalInstance) {
        $scope.close = function () {
            $modalInstance.close();
        };
    });
    angular.module('ChatApp').controller('ModalContacts', function ($scope, $modalInstance) {
        $scope.close = function () {
            $modalInstance.close();
        };
    });