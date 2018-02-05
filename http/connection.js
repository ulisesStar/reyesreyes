var mysql = require('mysql');
var Sequelize = require('sequelize');

/*
var sequelize = new Sequelize('heroku_edc68d2cc793625', 'b5fa60b7f9c741', '54084b45', {
    host: 'us-cdbr-iron-east-05.cleardb.net',
    dialect: 'mysql',
    port: '3306',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


sequelize.sync()
    .then(function() {
        console.log('Connecion realizada');
    })
    .catch(function(err) {
        console.log('No se puede conectar a la bd:', err);
    }
);
*/

var sequelize = new Sequelize('reyes', 'root', 'root', {
    host: '104.155.130.45',
    dialect: 'mysql',
    port: '4306',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

