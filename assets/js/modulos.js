app.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {

	function template(seccion, vista) {
	    let obj = {
	        name: seccion + vista,
	        files: [ 'js/' + seccion + '/frags/' + vista + '.js' ]
	    }
	    return obj
	}

    $ocLazyLoadProvider.config({
        debug: true,
        modules: [
            template('main', 'home'),
            template('main', 'nosotros'),
            template('main', 'consulta'),
            template('main', 'servicios'),
			template('main', 'servicio'),
            template('main', 'testimonios'),
            template('main', 'prospecto'),
			template('main', 'respuesta'),
            template('main', 'valores'),

			template('admin', 'home'),
			template('admin', 'servicios'),
			template('admin', 'servicio'),

			template('admin', 'abogados'),
			template('admin', 'abogado'),

			template('admin', 'prospectos'),
			template('admin', 'prospecto'),

			template('admin', 'topicos'),
			template('admin', 'topico')
        ]
    });

	//console.log($ocLazyLoadProvider)
}]);
