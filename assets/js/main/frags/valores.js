var app = angular.module('myapp');

app.controller('valoresCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams) {


    new TimelineMax()
    .from($('.primero'), 1, { x: '-1000%', ease: Power2.easeIN })
    .from($('.razon1'), 1, { x: '1000%', ease: Power2.easeIN }, "-=.5")
    .from($('.razon2'), 1, { x: '1000%', ease: Power2.easeIN }, "-=.9")
    .from($('.razon3'), 1, { x: '1000%', ease: Power2.easeIN }, "-=.9")
    .from($('.razon3'), 1, { x: '1000%', ease: Power2.easeIN }, "-=.9")

    .from($('.testimonios'), 1, { x: '-1000%', ease: Power2.easeIN }, "-=.9")

    .fromTo($('.opacity'), 1, {opacity: '0'}, { opacity: '1', ease: Power2.easeIN}, "-=.9")


    $('.slider').slick({
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
    });

    // var scrollMagicController = new ScrollMagic.Controller();

    // var tl = new TimelineMax();
    //
    // $('.portafolio').each(function() {
    //
    //     tl
    //         .from(this, .5, {x : '-1000%', ease: Power2.easeIN,}, '-=1')
    // })
    //
    // tl
    //     .from($('.razones'), 1, {x : '-1000%', ease: Power2.easeIN,}, '-=1')
    //     .from($('.testimonios'), 1, {x : '-1000%', ease: Power2.easeIN,}, '-=1.5')
    //



});
