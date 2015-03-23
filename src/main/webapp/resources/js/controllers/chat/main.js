/**
 * Created by Airofsummer on 23.03.2015.
 */
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