
//*-*-*-CONEXION CON SEQUELIZE & MYSQL-*-*-*-*-*-*-*
var conector = require('./connection');

//- Modelos

var usuario = require('./db/modeloUsuario')(conector);
var categoria = require('./db/modeloCategorias')(conector);
var imagenes = require('./db/modeloImagenes')(conector);
var prospectos = require('./db/modeloProspectos')(conector);
var respuestas = require('./db/modeloRespuestas')(conector);
var servicios = require('./db/modeloServicios')(conector);
var subservicios = require('./db/modeloSubservicios')(conector);
var topicos = require('./db/modeloTopicos')(conector);
var abogados = require('./db/modeloAbogados')(conector);
var foto = require('./db/modeloFoto')(conector);

//- Relations

servicios.hasMany(imagenes, {foreignKey: 'IdServicio'});
imagenes.belongsTo(servicios, {foreignKey: 'IdServicio'});

servicios.hasMany(subservicios, {foreignKey: 'IdServicio'});
subservicios.belongsTo(servicios, {foreignKey: 'IdServicio'});

servicios.hasMany(prospectos, {foreignKey: 'IdServicio'});
prospectos.belongsTo(servicios, {foreignKey: 'IdServicio'});

servicios.hasMany(topicos, {foreignKey: 'IdServicio'});
topicos.belongsTo(servicios, {foreignKey: 'IdServicio'});

topicos.hasOne(respuestas, {foreignKey: 'IdTopico'});
respuestas.belongsTo(topicos, {foreignKey: 'IdTopico'});

foto.belongsTo(abogados, {foreignKey: 'IdAbogado'});
abogados.hasOne(foto, {foreignKey: 'IdAbogado'});


module.exports.usuario = usuario;
module.exports.categoria = categoria;
module.exports.prospectos = prospectos;
module.exports.respuestas = respuestas;
module.exports.servicios = servicios;
module.exports.subservicios = subservicios;
module.exports.topicos = topicos;
module.exports.abogados = abogados;
module.exports.imagenes = imagenes;
module.exports.foto = foto;
