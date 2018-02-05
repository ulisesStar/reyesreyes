var app = angular.module('myapp');

app.controller('abogadosCtrl', function($scope, $state, $mdDialog, alertas, $stateParams, Abogados) {


	Abogados.obtener().then(res => {
		$scope.abogados = res.data;
		$scope.$digest();
	})

    $scope.nuevo = function(ev) {
		$mdDialog.show({
			templateUrl: '/dialogs/abogados',
			parent: angular.element(document.body),
			bindToController: true,
			preserveScope: true,
			fullscreen: $scope.customFullscreen,
			controller: function($scope, $mdDialog, alertas, $state, Abogados) {
				$scope.submit = function(abogado) {
					//console.log(abogado);
					Abogados.crear(abogado).then(res => {
						$mdDialog.hide();
						$state.go('abogado',  {id : res.data.id})
					})

					 alertas.mostrarToastEstandar("Abogado agregado correctamente");
				}
				$scope.close = function() {
					$mdDialog.hide(false);
				}
			}
		})
	}

	$scope.eliminarAbogado = function(abogado, $index) {
		console.log($index);
		ventana = $mdDialog.confirm().title('¿Seguro que quieres eliminarlo?').textContent('Para eliminar de forma permanente dale en aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true);

		$mdDialog.show(ventana).then(function() {

			Abogados.eliminar(abogado.id).then(function(res) {
				$scope.abogados.splice($index, 1)
				alertas.mostrarToastEstandar("Abogado eliminiado correctamente");
			})

		}, function() {});
	}

});
