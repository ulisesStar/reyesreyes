var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Servicios = sequelize.define('servicios', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        descripcion: Sequelize.TEXT,
        logo: Sequelize.STRING
    })

    return Servicios;

};

module.exports = ex;
