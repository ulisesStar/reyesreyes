var app = angular.module('myapp');

app.controller('homeCtrl', function($scope, $transitions, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams) {

    var self = this;

    const estados = [
        { nombre :  'home.consulta', background : 'img/consulta.jpeg'},
        { nombre :  'home.nosotros', background : 'img/nosotros.jpg'},
        { nombre :  'home.valores', background : 'img/valores.jpg'},
        { nombre :  'home.servicios', background : 'img/servicios.jpg'}
    ]

    $scope.actual = estados.find(n => n.nombre === $state.current.name);

    $transitions.onStart({}, trans => {
        $scope.actual = estados.find(n => n.nombre === $state.current.name);
    });

    $scope.cambiar = (valor) => {
        self.indicador = valor
        const idx = estados.findIndex(n => n.nombre === $state.current.name)
        var siguiente = idx + valor === estados.length ?  0 : idx +  valor
        console.log(siguiente)

        $state.go(estados[siguiente].nombre)
    }

    var ary = ['img/background.jpeg', 'img/background1.jpg', 'img/background2.jpg'];



});
