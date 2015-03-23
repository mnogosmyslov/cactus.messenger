/**
 * Created by Airofsummer on 23.03.2015.
 */
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
