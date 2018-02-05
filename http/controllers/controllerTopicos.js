var db = require('../relations');
var topicos = db.topicos;
var respuestas = db.respuestas;
var servicios = db.servicios;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    topicos.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });
};


// Delete [eliminar elemento]
ex.delete = function(req, res, next) {
    var id = req.params.id;
    topicos.findById(id).then(function(topicos) {
        topicos.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });
};

// Update [Actualizar elemento]
ex.update = function(req, res, next) {

    var id = req.params.id;
    var data = req.body;

    console.log(data);

    topicos.update(data, {
        where: {
            id: id
        }
    }).then(function(result) {
        res.status(200).jsonp(result);
    });
};

ex.read = function (req, res, next) {

    var id = req.params.id;

    if (id) {
        topicos.findById(id,{
            include: [
                {model: respuestas}
            ]
        }).then(function (result) {
            res.status(200).jsonp(result);
        });
    } else {
        topicos.findAll({
            include : [
                {model: servicios},
                {model: respuestas}
            ]
        }).then(function (result) {
            res.status(200).jsonp(result);
        });
    }
};

ex.crearRespuesta = function(req, res, next) {


    var data = req.body;

    respuestas.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.editarRespuesta = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    respuestas.update(data, {
        where: {
            id: id
        }
    }).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.obtenerConRespuesta = function(req, res, next) {
    var id = req.params.idTopico;

    respuestas.findOne({
        where: {
            IdTopico: id
        }
    }).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.filtro = function(req, res, next) {

    var data = req.body;

    console.log(data)

    data.include = [
        {model: respuestas}
    ]

    topicos.findAll(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};
