var app = angular.module('myapp');

app.controller('valoresCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams) {



    $('.slider').slick({
    		slidesToScroll: 1,
    		autoplay: true,
    		autoplaySpeed: 2000,
            arrows: false
    });

    // var scrollMagicController = new ScrollMagic.Controller();

    var tl = new TimelineMax();

    $('.portafolio').each(function() {

        tl
            .from(this, .5, {x : '-1000%', ease: Power2.easeIN,}, '-=1')
    })

    tl
        .from($('.razones'), 1, {x : '-1000%', ease: Power2.easeIN,}, '-=1')
        .from($('.testimonios'), 1, {x : '-1000%', ease: Power2.easeIN,}, '-=1.5')




});
