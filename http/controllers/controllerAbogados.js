var db = require('../relations');
var abogados = db.abogados;
var foto = db.foto;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    abogados.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });
};


// Delete [eliminar elemento]
ex.delete = function(req, res, next) {
    var id = req.params.id;
    abogados.findById(id).then(function(abogados) {
        abogados.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });
};

// Update [Actualizar elemento]
ex.update = function(req, res, next) {

    var id = req.params.id;
    var data = req.body;

    console.log(data);

    abogados.update(data, {
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
        abogados.findById(id, {
            include: [
                {model : foto}
            ]
        }).then(function(abogados) {
            res.status(200).jsonp(abogados);
        });
    } else {
        abogados.findAll({
            include: [
                {model : foto}
            ]
        }).then(function(abogados) {
            res.status(200).jsonp(abogados);
        });
    }
};

ex.foto = function(req, res, next) {
    var id = req.params.id;
    var data = req.body.imagen;

    console.log(data);

    foto.create(
        {
        imagen: data,
        IdAbogado: id
    }
    ).then(function(result) {
        res.status(200).jsonp(result);
    });

};
