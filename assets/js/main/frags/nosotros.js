var app = angular.module('myapp');

app.controller('nosotrosCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams) {

    new TimelineMax()
    .from($('.primero'), 1, { x: '-1000%', ease: Power2.easeIN })
    .from($('.descripcion'), 1, { x: '1000%', ease: Power2.easeIN }, "-=.5")
    .from($('.informacion'), 1, { x: '1000%', ease: Power2.easeIN }, "-=.5")
    .fromTo($('.opacity'), 1, {opacity: '0'}, { opacity: '1', ease: Power2.easeIN}, "-=.9")

});
