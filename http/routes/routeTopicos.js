var express = require('express');
var routeTopicos = express.Router();

var x = require("../controllers/controllerTopicos");

routeTopicos.route('/data/Topicos')
        .get(x.read)
        .post(x.create);

routeTopicos.route('/data/respuestas/:idTopico')
        .get(x.obtenerConRespuesta)
        .post(x.crearRespuesta);

routeTopicos.route('/data/editarRespuesta/:id')
        .put(x.editarRespuesta);

routeTopicos.route('/data/filtro')
        .post(x.filtro);

routeTopicos.route('/data/Topico/busqueda/:item')
        .get(x.busqueda);

routeTopicos.route('/data/Topicos/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeTopicos;
