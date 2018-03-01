var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Topicos = sequelize.define('topicos', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.TEXT,
        popularidad: Sequelize.INTEGER
    })

    return Topicos;

};

module.exports = ex;
