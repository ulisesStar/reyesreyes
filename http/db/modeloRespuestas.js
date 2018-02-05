var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Respuestas = sequelize.define('respuestas', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        respuesta: Sequelize.TEXT
    })

    return Respuestas;

};

module.exports = ex;
