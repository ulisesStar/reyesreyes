var app = angular.module('myapp');

app.controller('topicoCtrl', function($scope, $state, $stateParams, alertas,  Topicos, Servicios) {

	var id = $stateParams.id;

	console.log(id);

	Servicios.obtener().then(res => {
		$scope.servicios = res.data;
		$scope.$digest();
	})

	Topicos.one(id).then(res => {
		$scope.topico = res.data;
		$scope.$digest();

		Topicos.obtenerConRespuesta(id).then(res => {
			$scope.respuesta = res.data;
			$scope.$digest();
			console.log($scope.respuesta);
		})
	})

	$scope.editarTopico = function(topico){
		console.log(topico)
		Topicos.editar(topico).then(res => {
			console.log(res.data);
			alertas.mostrarToastEstandar("Tópico editado correctamente");
		})
	}

	$scope.focusRespuesta = function(respuesta){
		respuesta.id === undefined ? (

			respuesta.IdTopico = id,

			Topicos.crearRespuesta(id, respuesta).then(res => {
				$scope.respuestas = res.data;
				console.log(res.data);
				$scope.$digest();
				alertas.mostrarToastEstandar("Respuesta Agregada Correctamente");
				$state.go('topicos');
			})
		) : (
			Topicos.editarRespuesta(respuesta).then(res => {
				$scope.respuestas = res.data;
                alertas.mostrarToastEstandar("Respuesta editada correctamente");
				$scope.$digest();
				$state.go('topicos');
            })
		)
	}



});
