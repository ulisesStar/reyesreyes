var app = angular.module('myapp');

app.controller('topicosCtrl', function($scope, $state, $stateParams, alertas, $mdDialog, Topicos) {

	Topicos.obtener().then(res => {
		$scope.topicos = res.data;
		$scope.$digest();
		console.log($scope.topicos)
	})

	$scope.eliminarTopico = function(topico, $index) {
		console.log($index);
		ventana = $mdDialog.confirm().title('¿Seguro que quieres eliminar este topico?').textContent('Para eliminar de forma permanente dale en aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true);

		$mdDialog.show(ventana).then(function() {

			Topicos.eliminar(topico.id).then(function(res) {
				$scope.topicos.splice($index, 1)
				alertas.mostrarToastEstandar("Topico eliminiado correctamente");
			})

		}, function() {});
	}

	$scope.nuevo = function(ev) {
		$mdDialog.show({
			templateUrl: '/dialogs/topicos',
			parent: angular.element(document.body),
			// locals: {
			//     cotizacion: $scope.cotizacion
			// },
			bindToController: true,
			preserveScope: true,
			fullscreen: $scope.customFullscreen,
			controller: function($scope, $mdDialog, alertas, $state, Topicos) {
				$scope.submit = function(topico) {

					Topicos.crear(topico).then(res => {
						$mdDialog.hide();
						$state.go('topico',  {id : res.data.id})
					})

					 alertas.mostrarToastEstandar("Tópico agregado correctamente");
				}
				$scope.close = function() {
					$mdDialog.hide(false);
				}
			}
		}).then(data => {

			data === true
				? $scope.cotizacion = {}
				: alertas.mostrarToastEstandar("puedes seguir editando");

		});
	}

});
