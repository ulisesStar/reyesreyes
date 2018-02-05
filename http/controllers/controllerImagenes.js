var db = require('../relations');
var imagenes = db.imagenes;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    imagenes.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });
};


// Delete [eliminar elemento]
ex.delete = function(req, res, next) {
    var id = req.params.id;
    imagenes.findById(id).then(function(imagenes) {
        imagenes.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });
};

// Update [Actualizar elemento]
ex.update = function(req, res, next) {

    var id = req.params.id;
    var data = req.body;

    console.log(data);

    imagenes.update(data, {
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
        imagenes.findById(id).then(function(imagenes) {
            res.status(200).jsonp(imagenes);
        });
    } else {
        imagenes.findAll().then(function(imagenes) {
            res.status(200).jsonp(imagenes);
        });
    }
};
