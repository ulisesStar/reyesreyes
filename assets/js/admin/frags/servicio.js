var app = angular.module('myapp');

app.controller('servicioCtrl', function($scope, $state, $mdDialog, $window, alertas, $stateParams, Servicios) {

    var id = $stateParams.id

    Servicios.one(id).then(res => {
        $scope.servicio = res.data
        $scope.$digest();
		console.log(res.data);
    })

    $scope.limpiar = function(){
           $scope.aparecer = false;
           delete $scope.sub;
       }


    Servicios.obtenerConServicio(id).then(res => {
        $scope.subs = res.data;
        $scope.$digest();
        console.log(res.data);
    })

    $scope.editarServicio = function(servicio){
        Servicios.editar(servicio).then(res => {
        	alertas.mostrarToastEstandar("Información Básica Editada");
        })
    }

    $scope.focusSub = function(sub){
           $scope.aparecer = true;
           sub ? ($scope.sub = sub) : ($scope.sub = {});
       }

   $scope.submitSub = function(sub){
       console.log(sub)
       sub.IdServicio = id;
       sub.id === undefined ? (
           Servicios.crearConServicio(id, sub).then(res => {
               console.log(res.data)
               $scope.subs.push(res.data.nombre);
               $scope.$digest();
               $scope.aparecer = false;
               alertas.mostrarToastEstandar("Subservicio creado");
               $window.location.reload();
           })
       ) : (
           Servicios.editarSubservicio(sub).then(res => {
               console.log(res.data);
               alertas.mostrarToastEstandar("Subservicio editado");
               delete $scope.sub;
               $scope.aparecer = false;
               $scope.$digest();
           })
       );
   }

   $scope.eliminarSub = function(sub, $index) {

       ventana = $mdDialog.confirm().title('¿Seguro que quieres eliminar este Subservicio?').textContent('Para eliminar permanentemente dale en Aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true);

       $mdDialog.show(ventana).then(function() {

           Servicios.eliminarSubservicio(sub.id).then(function(data) {
               $scope.subs.splice($index,1);
               $scope.$digest();
           })

       }, function() {});

   }

});
