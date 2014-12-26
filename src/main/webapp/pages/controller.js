var app = angular.module("MyApp", []);

app.controller("DataCtrl", function($scope, $http) {
    $http.get('http://localhost:8080/messenger/getContent.json').
        success(function(data) {
            alert("success");
            $scope.data = data;
        }).
        error(function(data){
            alert("fail");
        });
});