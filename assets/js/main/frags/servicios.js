var app = angular.module('myapp');

app.controller('serviciosCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams) {

	$scope.irServicio = function(servicio){

	    //let titulo  =  _.snakeCase(servicio.nombre);
	    console.log(servicio)
	    $state.go('home.servicio', { id: servicio})

	}
});
