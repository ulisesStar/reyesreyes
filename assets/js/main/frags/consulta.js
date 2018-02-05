var app = angular.module('myapp');

app.controller('consultaCtrl', function($scope, $window, $rootScope, $analytics, $http, $mdDialog, mdDialog, $timeout, $mdExpansionPanel, $mdSidenav, $state, $stateParams, Servicios, Topicos) {

    self = this;

      var tl2 = new TimelineMax();

    tl2
        .fromTo($('.titulo-consulta'), 2, {opacity : '0'}, {opacity : '1', ease: Power2.easeIN})
        .from($('.contenido'), 1, {display : 'none',  ease: Power2.easeIN})
        .from($('#panel'), 1, {x : '-1000%',  ease: Power2.easeIN})

    Servicios.obtener().then(res => {
        $scope.servicios = res.data;
        $scope.$digest()
        //console.log(res.data)
    })


    $scope.peticion = {
        offset: 0,
        limit: 5
    }


    //$mdExpansionPanel().waitFor('0').then(function (instance) {
    //  instance.expand();
    //});


   $scope.collapse = function(ev) {

    var usuario = $rootScope.prospecto;
    console.log(usuario)

    if(usuario === undefined){
        console.log('no hay usuario')
            $mdDialog.show({
                templateUrl: '/partials/prospecto',
                parent: angular.element(document.body),
                bindToController: true,
                clickOutsideToClose: true,
                preserveScope: true,
                fullscreen: $scope.customFullscreen,
                controller: function($scope, $mdDialog, alertas, $state, Prospecto) {

                    $scope.nuevoProspecto = function(prospecto) {
                        Prospecto.crear(prospecto).then(res => {
                            $rootScope.prospecto = res.data
                            $scope.$digest();
                            console.log($rootScope.prospecto)
                        })
                            $mdDialog.hide(false);
                    }


                    $scope.close = function() {
                        $mdDialog.hide(false);
                    }
                }
            });
        }
    else
    {
        console.log('si hay usuario')
    }
        /*
        $mdDialog.show({
            templateUrl: '/partials/prospecto',
            parent: angular.element(document.body),

            bindToController: true,
            preserveScope: true,
            fullscreen: $scope.customFullscreen,
            controller: function($scope, $mdDialog, alertas, $state) {
                $scope.nuevoProspecto = function(prospecto) {
                        $mdDialog.hide(false);
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
        */
    }

    // $("li").html($compile("<div ng-attr-tooltip="test">Cancel</div>")(scope));

    if($window.location.search.length > 0){

        let parametro = _.chain($window.location.search)
            .replace('?', '', '/') // a=b454&c=dhjjh&f=g6hksdfjlksd
            .split('&') // ["a=b454","c=dhjjh","f=g6hksdfjlksd"]
            .map(_.ary(_.partial(_.split, _, '='), 1)) // [["a","b454"],["c","dhjjh"],["f","g6hksdfjlksd"]]
            .fromPairs() // {"a":"b454","c":"dhjjh","f":"g6hksdfjlksd"}
            .value()

            console.log(parametro.categoria)

            $scope.peticion = {
                offset: 0,
                limit: 5,
                where: {
                    IdServicio: Number(parametro.categoria)
                }
            }

    }else{
        filtro()
    }


    self.BuscarNombreChange = function(text) {}
    self.nombreSeleccionadoChange = function(item) {

        item
            ? (filtro({
                offset: 0,
                limit: 5,
                where: {
                    nombre: item.nombre
                }
            }))
            : (filtro())

    }

    self.BuscarServicioChange = function(text) {}
    self.ServicioSeleccionadoChange = function(item) {

        console.log(item)

        item
            ? (filtro({
                offset: 0,
                limit: 5,
                where: {
                    IdServicio: item.id
                }
            }))
            : (filtro())

    }

    $scope.avanzar = function(topico){

        $rootScope.prospecto === undefined ? (
            $state.go('home.prospecto'),
            $rootScope.topico = topico

        ) : (
            $state.go('home.respuesta'),
            $rootScope.topico = topico
        )

    }

    function filtro(peticion) {

        let x = peticion
            ? (peticion)
            : ($scope.peticion)

        Topicos.filtro(x).then(res => {
            $scope.topicos = res.data;
            console.log($scope.topicos)
            $scope.$digest();

        })
    }

    $scope.paging = {
        total: 5,
        current: 0,
        onPageChanged: loadPages
    };

    $scope.currentPage = 0;

    function loadPages() {

        $scope.peticion.offset = $scope.paging.current;

        console.log('Current page is : ' + $scope.paging.current);

        filtro()

        $scope.currentPage = $scope.paging.current;
    }



$scope.arreglo = [1,2,3,4,5];
$scope.items = [];

$scope.agregarQuitar= (item, items) => {

    var control = items.indexOf(item);

    control > -1 ? items.splice(control, 1) : items.push(item)
    console.log(items)
}

});
