/**
 * Created by Airofsummer on 14.01.2015.
 */
angular.module('LandApp', ['ui.bootstrap']);
angular.module('LandApp').controller('ModalCtrl', function ($scope, $modal, $log) {

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {

        var modalInstance = $modal.open({
            templateUrl: 'myModal.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: { },
            backdrop: true,
            backdropClass: 'backdrop'
        });

    };
});

angular.module('LandApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

    $scope.ok = function () {
        $modalInstance.close();
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

});
