var app = angular.module('myapp');

app.controller('serviciosCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams) {

	new TimelineMax()
    .from($('.penal'), 1, { x: '-1000%', ease: Power2.easeIN })
    .from($('.militar'), 1, { x: '-1000%', ease: Power2.easeIN }, "-=.9")
    .from($('.civil'), 1, { x: '-1000%', ease: Power2.easeIN }, "-=.9")
    .from($('.amparo'), 1, { x: '-1000%', ease: Power2.easeIN }, "-=.9")
    .from($('.fiscal'), 1, { x: '-1000%', ease: Power2.easeIN }, "-=.9")

	$scope.irServicio = function(servicio){

	    //let titulo  =  _.snakeCase(servicio.nombre);
	    console.log(servicio)
	    $state.go('home.servicio', { id: servicio})

	}
});
