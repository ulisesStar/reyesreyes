var db = require('../relations');
var ex = module.exports = {};

//const Hubspot = require('hubspot');
//const hubspot = new Hubspot({apiKey: '02e286e7-5252-4622-b30a-9dafd82a990b'});

var prospectos = db.prospectos;

ex.create = function(req, res, next) {

    var data = req.body;
    prospectos.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });
};

ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        prospectos.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        prospectos.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};

ex.crearProspecto = function(req, res, next) {

    var data = req.body;

    let hubcli = {
        properties: [
            {
              "property": "firstname",
              "value": data.nombre
            },
            {
              "property": "lastname",
              "value": data.apellido
            },
            {
                "property": "email",
                "value": data.correo
            },
            {
              "property": "company",
              "value": data.empresa
            },
            {
              "property": "phone",
              "value": data.telefono
            }
        ]
    }

    console.log(data);

    prospectos.create(data).then(function(result) {
        hubspot.contacts.create(hubcli).then(creacion => {
            console.log(creacion)
        })
        res.status(200).jsonp(result);
    });

};

ex.obtenerProspecto = function(req, res, next) {
    var id = req.params.id;

    if (id) {
        prospectos.findById(id).then(function(prospectos) {
            res.status(200).jsonp(prospectos);
        });
    } else {
        prospectos.findAll().then(function(prospectos) {
            res.status(200).jsonp(prospectos);
        });
    }
};
