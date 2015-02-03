/**
 * Created by Airofsummer on 30.01.2015.
 */
    angular.module('ChatApp', ['ui.bootstrap', "ui.router", "ngAnimate"]);

    angular.module('ChatApp').controller('Header', function ($scope, $modal) {
        $scope.open = function (size) {

            var modalInstance = $modal.open ({
                templateUrl: 'settingsModal.html',
                controller: 'ModalChat',
                size: size,
                resolve: { },
                backdrop: true
            });

        };
        $scope.contactLists = [{
            title: 'Dark Daddy',
            url: 'force_gripper.tpl.html'
        }, {
            title: 'policebox',
            url: 'policebox.tpl.html'
        }, {
            title: 'sauron',
            url: 'sauron.tpl.html'
        }, {
            title: 'Albus Percival Wulfric Brian Dumbledore',
            url: 'albus.tpl.html'
        }, {
            title: 'Wenk Wenk',
            url: 'wenk-wenk.tpl.html'
        }];
        $scope.onClickContact = function (tab) {
            $scope.currentContact = tab.url;
        };

        $scope.isActiveContact = function(chatUrl) {
            return chatUrl == $scope.currentContact;
        };
        $scope.contacts = false;
        $scope.add_cont = false;
    }).controller("ChatApi", function($scope){
        $scope.chats = [{
            title: 'Dark Daddy',
            url: 'force_gripper.tpl.html'
        }, {
            title: 'policebox',
            url: 'policebox.tpl.html'
        }, {
            title: 'sauron',
            url: 'sauron.tpl.html'
        }, {
            title: 'Albus Percival Wulfric Brian Dumbledore',
            url: 'albus.tpl.html'
        }, {
            title: 'Wenk Wenk',
            url: 'wenk-wenk.tpl.html'
        }];
        $scope.currentChat = 'force_gripper.tpl.html';

        $scope.onClickChat = function (tab) {
            $scope.currentChat = tab.url;
        };

        $scope.isActiveChat = function(chatUrl) {
            return chatUrl == $scope.currentChat;
        };
    });

var expectFriendNames = function(expectedNames, key) {
    element.all(by.repeater(key + ' in chats').column(key + '.title')).then(function(arr) {
        arr.forEach(function(wd, i) {
            expect(wd.getText()).toMatch(expectedNames[i]);
        });
    });
    element.all(by.repeater(key + ' in contactLists').column(key + '.title')).then(function(arr) {
        arr.forEach(function(wd, i) {
            expect(wd.getText()).toMatch(expectedNames[i]);
        });
    });
};

    angular.module('ChatApp').controller('ModalChat', function ($scope, $modalInstance) {
        $scope.close = function () {
            $modalInstance.close();
        };
    });
