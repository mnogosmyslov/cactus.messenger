/**
 * Created by Airofsummer on 23.03.2015.
 */
    angular.module("ChatApp").controller("NewContact", function($scope, $http){
        var data = $scope.find;
        $scope.findContact = function(){
            $http({
                method: 'POST',
                url: 'someUrlhere',
                data: data,
                success: (function(data, status, headers, config) {
                    console.info("You have found "+ data);
                }),
                error: (function(data, status, headers, config){
                    console.warn('Alas');
                    setTimeout(function(){jQuery('#loginAlert').hide();},4000);
                })
            });
        }
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
