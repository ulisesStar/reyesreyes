var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Abogados = sequelize.define('abogados', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        historia: Sequelize.TEXT
    })

    return Abogados;

};

module.exports = ex;
