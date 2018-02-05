var app = angular.module('myapp');

app.controller('servicioCtrl', function($scope, $mdDialog, mdDialog, $state, $stateParams, Servicios) {

    console.log($stateParams)

    Servicios.one($stateParams.id).then(res => {
        $scope.servicio = res.data
        console.log(res.data)
        $scope.$digest();
        console.log($scope.servicio.nombre)
    })

});
