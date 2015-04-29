/**
 * Created by Airofsummer on 23.03.2015.
 */
angular.module("ChatApp").controller("ChatApi", function($scope, $http, ChatService, $rootScope) {
    $scope.messages = [];
    $scope.message = "";
    //$scope.max = 140;
    $scope.history = [];
    $scope.contacts = [];
    //$http.get("/server/user/999")
    //    .success(function(response) {$scope.settingsInfo = response;});
    $http.get("/server/user/" + profile.id)
        .success(function(response) {$scope.settingsInfo = response;});
    $http.get("../cactus/pages/chats/chatid1.json")
        .success(function(response) {$scope.history = response;});

    for (var i = 0; i < contactIds.length; i++){

        $http.get("/server/user/"+contactIds[i])
            .success(function(response) {$scope.contacts.push(response);});
    }

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