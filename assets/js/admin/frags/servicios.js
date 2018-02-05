var app = angular.module('myapp');

app.controller('serviciosCtrl', function($scope, $state, $mdDialog, alertas, $stateParams, Servicios) {


    Servicios.obtener().then(res => {
    	$scope.servicios = res.data;
    	$scope.$digest();
    })

    $scope.nuevo = function(ev) {
        $mdDialog.show({
            templateUrl: '/dialogs/servicio',
            parent: angular.element(document.body),
            bindToController: true,
            preserveScope: true,
            fullscreen: $scope.customFullscreen,
            controller: function($scope, $mdDialog, alertas, $state, Servicios) {
                $scope.submit = function(servicio) {
                    //console.log(abogado);
                    Servicios.crear(servicio).then(res => {
                        $mdDialog.hide();
                        $state.go('servicio',  {id : res.data.id})
                    })

                     alertas.mostrarToastEstandar("Servicio agregado correctamente");
                }
                $scope.close = function() {
                    $mdDialog.hide(false);
                }
            }
        })
    }

    $scope.eliminarServicio = function(servicio, $index) {
		ventana = $mdDialog.confirm().title('¿Seguro que quieres eliminarlo?').textContent('Para eliminar de forma permanente dale en aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true);

		$mdDialog.show(ventana).then(function() {

			Servicios.eliminar(servicio.id).then(function(res) {
				$scope.servicios.splice($index, 1)
				alertas.mostrarToastEstandar("Servicio eliminiado correctamente");
			})

		}, function() {});
	}
});
