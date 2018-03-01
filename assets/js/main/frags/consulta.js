var app = angular.module('myapp');

app.controller('consultaCtrl', function($scope, $window, $rootScope, $analytics, $http, $mdDialog, mdDialog, $timeout, $mdExpansionPanel, $mdExpansionPanelGroup, $mdSidenav, $state, $stateParams, Servicios, Topicos) {

    var self = this;

    new TimelineMax()
    .from($('.primero'), 1, { x: '1000%', ease: Power2.easeIN })
    .from($('.segundo'), 1, { x: '-1000%', ease: Power2.easeIN }, "-=1")
    .fromTo($('#panel'), 2, {opacity: '0'}, { opacity: '1', ease: Power2.easeIN})


    Servicios.obtener().then(res => {
        $scope.servicios = res.data;
        $scope.$digest()
        //console.log(res.data)
    })

    $scope.peticion = {
        offset: 0,
        limit: 3
    }

    self.usuario = false;

    self.ventana = function(key) {

        $mdDialog.show({
            templateUrl: '/partials/prospecto',
            clickOutsideToClose: false,
            fullscreen: true,
            controllerAs: 'ctrl',
            controller: function($scope, $mdDialog, alertas, $state, Prospecto) {

                $scope.nuevoProspecto = function(prospecto) {
                    Prospecto.crear(prospecto).then(res => {
                        $mdDialog.hide(res.data);
                        $scope.$digest();
                    })
                }

                this.close = function() {
                    $mdDialog.hide(false);
                }
            }
        }).then(result => {
            result !== false ? ( self.usuario = result ) : (

                $mdExpansionPanel().waitFor(key).then(function (instance) {
                    console.log(key)
                    console.log(instance)
                    instance.collapse({animation: false})
                }),

                self.topicos.forEach((n, key) => n.display = true)

            )
        })

    }

    if ($window.location.search.length > 0) {

        let parametro = _.chain($window.location.search).replace('?', '', '/'). // a=b454&c=dhjjh&f=g6hksdfjlksd
        split('&'). // ["a=b454","c=dhjjh","f=g6hksdfjlksd"]
        map(_.ary(_.partial(_.split, _, '='), 1)). // [["a","b454"],["c","dhjjh"],["f","g6hksdfjlksd"]]
        fromPairs(). // {"a":"b454","c":"dhjjh","f":"g6hksdfjlksd"}
        value()

        console.log(parametro.categoria)

        $scope.peticion = {
            offset: 0,
            limit: 5,
            where: {
                IdServicio: Number(parametro.categoria)
            }
        }

    } else {}

    class Pregunta {
        constructor(arg, key) {
            this.key = key;
            this.display = true;
            this.nombre = arg.nombre;
            this.respuesta = arg.respuesta.respuesta
        }
        abrir() {
            self.topicos.forEach((n, key)=> {
                if(key !== this.key){
                    n.display = false;
                }
            })

            if(!self.usuario){
                self.ventana(this.key)
            }
        }
        cerrar(){
            self.topicos.forEach((n, key)=> n.display = true)
        }
    }

    $scope.currentPage = 0;



    function filtro(peticion) {

        let x = peticion
            ? (peticion)
            : ($scope.peticion)

        Topicos.filtro(x).then(res => {

            self.topicos = res.data.map((n, key) => new Pregunta(n, key))

            const blaaa = new TimelineMax()

            res.data.forEach((n , k) => {
                blaaa.from($('.clase' + k), 10, { x: '1000%', ease: Power2.easeIN})
            })


            // $mdExpansionPanelGroup().waitFor('consulta').then(instance => {
            //     self.topicos.forEach((n, key) => {
            //         instance.register(key, {});
            //     })
            // });

        }).then(() => $scope.$digest())
    }

    $scope.paging = {
        total: 5,
        current: 0,
        onPageChanged: function() {

            $scope.peticion.offset = $scope.paging.current;
            $scope.currentPage = $scope.paging.current;
            filtro()

        }

    };

    self.autocomplete = {
        seleccion: function(item) {
            console.log(item)
        },
        buscar: function(item) {
            console.log(item)
        },
        filtrar: function(item) {

            if (item.length > 3) {
                return Topicos.busqueda(item).then(res => {
                    return res.data
                })
            } else {
                var resultados = []
            }

            return resultados

        }
    }

});
