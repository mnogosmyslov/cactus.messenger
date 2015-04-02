/**
 * Created by Airofsummer on 23.03.2015.
 */
angular.module('ChatApp').controller("HeaderContacts", function($scope){

    $scope.onClickContact = function (tab) {
        $scope.currentContact = tab.url;
    };
    $scope.isActiveContact = function(chatUrl) {
        return chatUrl == $scope.currentContact;
    };

});
