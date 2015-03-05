/**
 * Created by Airofsummer on 30.01.2015.
 */
    angular.module('ChatApp', [

        "ui.router",
        "ngAnimate"]);

    angular.module('ChatApp').controller("HeaderContacts", function($scope, $http){

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
        $http.get("../cactus/pages/chats/settings.json")
            .success(function(response) {$scope.settingsInfo = response;});


        $scope.setting = false;
    });

angular.module("ChatApp").controller("ChatApi", function($scope, $http, ChatService) {
    $scope.messages = [];
    $scope.message = "";
    $scope.max = 140;

        $http.get("../cactus/pages/chats/chatlist.json")
            .success(function(response) {$scope.chats = response; $scope.currentChat = $scope.chats[0].url;});

        $scope.onClickChat = function (tab) {
            $scope.currentChat = tab.url;
        };
        $scope.isActiveChat = function(chatUrl) {
            return chatUrl == $scope.currentChat;
        };

    $scope.addMessage = function() {
        ChatService.send($scope.message);
        $scope.message = "";
    };

    ChatService.receive().then(null, null, function(message) {
        $scope.messages.push(message);
    });
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
