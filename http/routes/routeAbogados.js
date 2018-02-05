var express = require('express');
var routeAbogados = express.Router();

var x = require("../controllers/controllerAbogados");

routeAbogados.route('/data/Abogados')
        .get(x.read)
        .post(x.create);

routeAbogados.route('/data/Abogados/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

routeAbogados.route('/data/foto/:id')
        .post(x.foto);

module.exports = routeAbogados;
