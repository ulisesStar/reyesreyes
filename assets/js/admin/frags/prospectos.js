var app = angular.module('myapp');

app.controller('prospectosCtrl', function($scope, $state, $stateParams, Prospecto) {


    Prospecto.obtener().then(res => {

        $scope.contactos = res.data;
        console.log($scope.contactos)
        $scope.$digest()


    })


});
