/**
 * Created by Airofsummer on 23.03.2015.
 */
angular.module("ChatApp").controller("ChatApi", function($scope, $http, ChatService, $rootScope) {
    $scope.messages = [];
    $scope.message = "";
    //$scope.max = 140;
    $scope.history = [];
    $http.get("/server/user/999")
        .success(function(response) {$scope.settingsInfo = response;});
    $http.get("../cactus/pages/chats/chatid1.json")
        .success(function(response) {$scope.history = response;});
    $http.get("../cactus/pages/chats/contacts.json")
        .success(function(response) {$scope.contactLists = response;});
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
        $rootScope.animation = currRoute.animation;
    });

    $scope.addMessage = function() {
        ChatService.send($scope.message);
        $scope.message = "";
    };

    ChatService.receive().then(null, null, function(message) {
        $scope.messages.push(message);
    });
});