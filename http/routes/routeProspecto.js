var express = require('express');
var routeProspectos = express.Router();

var x = require("../controllers/controllerProspectos");

routeProspectos.route('/data/prospectos')
        .post(x.create)
        .get(x.read);

routeProspectos.route('/data/crearProspecto')
        .post(x.crearProspecto);

routeProspectos.route('/data/obtenerProspecto/:id')
        .get(x.obtenerProspecto);

module.exports = routeProspectos;
