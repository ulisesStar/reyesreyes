var app = angular.module('myapp');

app.controller('respuestaCtrl', function($scope, $rootScope, $mdDialog, mdDialog, $state, $stateParams, Topicos) {

    var id = $rootScope.topico.id;

    $rootScope.seccion = 'Respuesta'

    if(id === null){

        $state.go('home.topico')

    }else{

        Topicos.obtenerConRespuesta(id).then(res => {
            console.log(res)

            $scope.respuesta = res.data.respuesta;
            console.log($scope.respuesta)
            $scope.$digest()
        })

    }



});
