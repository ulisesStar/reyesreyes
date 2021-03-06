app.run([
    '$rootScope',
    '$state',
    '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);

app.config([
    '$urlRouterProvider',
    '$stateProvider',
    function($urlRouterProvider, $stateProvider) {

        function template(url, template, controller, oz, params) {
            let obj = {
                url: url,
                params: params,
                views: {
                    'main': {
                        templateUrl: template,
                        controller: controller + ' as ctrl'
                    }
                },
                resolve: {
                    loadMyCtrl: [
                        '$ocLazyLoad',
                        function($ocLazyLoad) {
                            return $ocLazyLoad.load([oz]);
                        }
                    ]
                }
            }
            return obj
        }

        function background(url, template, controller, oz, params) {
            let obj = {
                url: url,
                params: params,
                views: {
                    'background': {
                        template: `<div style="background-image : url('img/${url}.jpg')"></div>`
                    },
                    'main': {
                        templateUrl: template,
                        controller: controller + ' as ctrl'
                    }
                },
                resolve: {
                    loadMyCtrl: [
                        '$ocLazyLoad',
                        function($ocLazyLoad) {
                            return $ocLazyLoad.load([oz]);
                        }
                    ]
                }
            }
            return obj
        }

        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home', {
                url: '/',
                redirectTo: 'home.consulta',
                views: {
                    'main': {
                        templateUrl: '/main/home',
                        controller: 'homeCtrl as ctrl'
                    }
                },
                resolve: {
                    loadMyCtrl: [
                        '$ocLazyLoad',
                        function($ocLazyLoad) {
                            return $ocLazyLoad.load(['mainhome']);
                        }
                    ]
                }
            })
        // .state('home.prospecto', template('prospecto', '/main/consultachilds/prospecto', 'prospectoCtrl', 'mainprospecto', { 'topico' : null}))
        // .state('home.respuesta', template('respuesta', '/main/consultachilds/respuesta', 'respuestaCtrl', 'mainrespuesta', { 'topico' : null}))
        .state('home.nosotros', background('nosotros', '/main/nosotros', 'nosotrosCtrl', 'mainnosotros'))
        .state('home.valores', background('valores', '/main/valores', 'valoresCtrl', 'mainvalores'))
        .state('home.consulta', background('consulta', '/main/consulta', 'consultaCtrl', 'mainconsulta'))
        .state('home.servicios', background('servicios', '/main/servicios', 'serviciosCtrl', 'mainservicios'))
        .state('home.servicio', template('servicio/:id', '/main/servicio', 'servicioCtrl', 'mainservicio', { 'id' : null}))
        .state('home.testimonios', template('testimonios', '/main/testimonios', 'testimoniosCtrl', 'maintestimonios'))
    }
]);
