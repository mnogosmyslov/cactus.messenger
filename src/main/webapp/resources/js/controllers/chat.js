/**
 * Created by Airofsummer on 30.01.2015.
 */
    angular.module('ChatApp', ['ui.bootstrap', "ui.router", "ngAnimate"]);

    angular.module('ChatApp').controller('HeaderSettings', function ($scope, $modal, $http) {

        $scope.open = function (size) {

            var modalInstance = $modal.open ({
                templateUrl: 'settingsModal.html',
                controller: 'ModalChat',
                size: size,
                resolve: { },
                backdrop: true
            });

        };



    }).controller("ShowInfo", function($scope, $http){

     $http.get("../cactus/pages/chats/settings.json")
            .success(function(response) {$scope.settingsInfo = response;});

    }).controller("HeaderContacts", function($scope, $http){

        $http.get("../cactus/pages/chats/contacts.json")
            .success(function(response) {$scope.contactLists = response;});
        $scope.onClickContact = function (tab) {
            $scope.currentContact = tab.url;
        };
        $scope.isActiveContact = function(chatUrl) {
            return chatUrl == $scope.currentContact;
        };
        $scope.contacts = false;
        $scope.add_cont = false;

    }).controller("ChatApi", function($scope, $http){

        $http.get("../cactus/pages/chats/chatlist.json")
            .success(function(response) {$scope.chats= response;});

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
