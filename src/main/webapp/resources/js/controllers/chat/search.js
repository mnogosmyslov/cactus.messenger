/**
 * Created by Airofsummer on 23.03.2015.
 */
    angular.module("chatApp").controller("NewContact", function($scope, $http){

        $scope.findContact = function(){
            var url = $scope.find;
            var mydata = {login: url};
            $http({
                method: 'POST',
                url: '/cactus/user/'+profile.id+'/addContact/'+url,
                data: mydata,
                success: (function(data, status, headers, config) {
                    location.href='#/';
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
