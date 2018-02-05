var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Prospectos = sequelize.define('prospectos', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        apellido: Sequelize.STRING,
        correo: Sequelize.STRING,
        telefono: Sequelize.STRING

    })

    return Prospectos;

};

module.exports = ex;
