var express = require('express');
var routeServicios = express.Router();

var x = require("../controllers/controllerServicios");

routeServicios.route('/data/Servicios')
        .get(x.read)
        .post(x.create);

routeServicios.route('/data/Servicios/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

routeServicios.route('/data/Subservicios/:idServicio')
        .get(x.obtenerConServicio)
        .post(x.crearConServicio);

routeServicios.route('/data/editarSubservicios/:id')
        .delete(x.eliminarSubservicio)
        .put(x.editarSubservicio);

module.exports = routeServicios;
