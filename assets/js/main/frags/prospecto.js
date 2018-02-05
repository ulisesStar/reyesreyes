var app = angular.module('myapp');

app.controller('prospectoCtrl', function($scope, $rootScope, $mdDialog, mdDialog, $state, alertas, $stateParams, Prospecto, $analytics) {


	console.log($stateParams.topico);



	var topico = $rootScope.topico;

	$rootScope.seccion = 'Formulario'

    $scope.nuevoProspecto = function(prospecto){

		// $analytics.eventTrack('prospecto', {  category: 'prospecto', label: topico.nombre });


        // Prospecto.crearProspecto(prospecto).then(res => {
        //     alertas.mostrarToastEstandar("Se ha enviado tu solicitud");
		// 	$rootScope.prospecto = res.data;
        //     $state.go('home.respuesta', {id: $stateParams.topico.id });
        // })
		$state.go('home.respuesta');

    }

});
