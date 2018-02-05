var db = require('../relations');
var servicios = db.servicios;
var subservicios = db.subservicios;
var prospectos = db.prospectos;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    servicios.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });
};


// Delete [eliminar elemento]
ex.delete = function(req, res, next) {
    var id = req.params.id;
    servicios.findById(id).then(function(servicios) {
        servicios.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });
};

// Update [Actualizar elemento]
ex.update = function(req, res, next) {

    var id = req.params.id;
    var data = req.body;

    console.log(data);

    servicios.update(data, {
        where: {
            id: id
        }
    }).then(function(result) {
        res.status(200).jsonp(result);
    });
};

ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        servicios.findById(id, {
            include : [
                { model: subservicios}
            ]
        }).then(function(servicios) {
            res.status(200).jsonp(servicios);
        });
    } else {
        servicios.findAll().then(function(servicios) {
            res.status(200).jsonp(servicios);
        });
    }
};

ex.crearConServicio = function(req, res, next) {
    var id = req.params.idServicio;
    var nombre = req.body.nombre;
    var descripcion = req.body.descripcion;

    subservicios.create({
        nombre: nombre,
        descripcion: descripcion,
        IdServicio: id
    }).then(function(result) {
            res.status(200).jsonp(result);
        });

};

ex.obtenerConServicio = function(req, res, next) {
    var id = req.params.idServicio;

    var busca = {
        where: {
            IdServicio: id
        }
    }

    subservicios.findAll(busca).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.editarSubservicio = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    subservicios.update(data, {
        where: {
            id: id
        }
    }).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.eliminarSubservicio = function(req, res, next) {
    var id = req.params.id;

    subservicios.findById(id).then(function(subservicios) {
        subservicios.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};
