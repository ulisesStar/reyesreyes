var app = angular.module('myapp');

app.controller('homeCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams) {

   
 var estados = [
        { nombre :  'home.consulta'} ,
        { nombre :  'home.nosotros'} ,
        { nombre :  'home.valores'} ,
        { nombre :  'home.servicios'}
    ]

    $scope.cambiar = (valor) => {
        const idx = estados.findIndex(n => n.nombre === $state.current.name)
        var siguiente = idx + valor === estados.length ?  0 : idx +  valor
        console.log(siguiente)

        $state.go(estados[siguiente].nombre)
    }
});
