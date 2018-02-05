var app = angular.module('myapp');

app.controller('abogadoCtrl', function($scope, $state, $mdDialog, $window, alertas, $stateParams, Abogados) {

	var id = $stateParams.id

	Abogados.one(id).then(res => {
		$scope.abogado = res.data;
		$scope.$digest();
		console.log(res.data);
	})

	$scope.editarAbogado = function(abogado){
		Abogados.editar(abogado).then(res => {
			alertas.mostrarToastEstandar("Información Básica Editada");
		})
	}

	$scope.focusPerfil = function(foto){
		foto.id === undefined ? (
			Abogados.foto(foto, id).then(res => {
				console.log(res.data)
	            $window.location.reload();
				alertas.mostrarToastEstandar("Foto de perfil Agregada Básica Editada");
			})
		) : (
			console.log('actualizando')
		)
	}
});
