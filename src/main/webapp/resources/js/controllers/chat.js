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
        $scope.contacts = $scope.add_cont = $scope.setting = $scope.profile = false;
        $scope.loadProfile = function () {
            $http.get("/server/user/999")
            .success(function(response) {$scope.settingsInfo = response; });

        }


    });

angular.module("ChatApp").controller("ChatApi", function($scope, $http, ChatService) {
    $scope.messages = [];
    $scope.message = "";
    //$scope.max = 140;
    $scope.history = [];
    $http.get("../cactus/pages/chats/chatid1.json")
        .success(function(response) {$scope.history = response;});
    $http.get("http://mydebug.hol.es/chatlist.php?userId=1000&authId=1QuVAyO8oFi2npXcGNB3KyAkkYz6liQm9khJT5Si")
        .success(function(response) {$scope.chats = response; $scope.currentChat = $scope.chats[0].url;});
    $http.get("http://mydebug.hol.es/contacts.php?userId=1000&authId=1QuVAyO8oFi2npXcGNB3KyAkkYz6liQm9khJT5Si")
        .success(function(response) {$scope.profiles = response;});

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
