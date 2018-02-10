app.service('Usuario', function() {

    this.obtener = function(id) { return axios('/data/usuario/' + id) }

});

app.service('Topicos', function() {

    this.crear = function(topico) { return axios.post('/data/Topicos', topico) }
    this.editar = function(topico) { return axios.put('/data/Topicos/' + topico.id, topico) }
    this.obtener = function() { return axios('/data/Topicos') }
    this.one = function(id) { return axios('/data/Topicos/' + id) }
    this.eliminar = function(id) { return axios.delete('/data/Topicos/' + id) }
    this.obtenerConRespuesta = function(id) { return axios('/data/respuestas/' + id) }
    this.editarRespuesta = function(respuesta) { return axios.put('/data/editarRespuesta/' + respuesta.id, respuesta) }
    this.crearRespuesta = function(id, respuesta) { return axios.post('/data/respuestas/' + id, respuesta) }

	this.busqueda = function(item) { return axios('/data/Topico/busqueda/' +  item) }

	this.filtro = function(peticion) { return axios.post('/data/filtro', peticion) }

});

app.service('Servicios', function() {

    this.crear = function(servicio) { return axios.post('/data/Servicios', servicio) }
    this.editar = function(servicio) { return axios.put('/data/Servicios/' + servicio.id, servicio) }
    this.obtener = function() { return axios('/data/Servicios') }
    this.one = function(id) { return axios('/data/Servicios/' + id) }
    this.eliminar = function(id) { return axios.delete('/data/Servicios/' + id) }
    this.obtenerConServicio = function(id) { return axios('/data/Subservicios/' + id) }
    this.crearConServicio = function(id, sub) { return axios.post('/data/Subservicios/' + id, sub) }
    this.editarSubservicio = function(sub) { return axios.put('/data/editarSubservicios/' + sub.id, sub) }

});

app.service('Abogados', function() {

    this.crear = function(abogado) { return axios.post('/data/Abogados', abogado) }
    this.editar = function(abogado) { return axios.put('/data/Abogados/' + abogado.id, abogado) }
    this.obtener = function() { return axios('/data/Abogados') }
    this.one = function(id) { return axios('/data/Abogados/' + id) }
    this.eliminar = function(id) { return axios.delete('/data/Abogados/' + id) }
    this.foto = function(foto, id) { return axios.post('/data/foto/' + id, foto) }

});

app.service('Prospecto', function() {

    this.crearProspecto = function(prospecto) { return axios.post('/data/crearProspecto', prospecto) }
    this.crear = function(prospecto) { return axios.post('/data/prospectos', prospecto) }
    this.obtener = function() { return axios('/data/prospectos') }

});

app.service('Imagenes', function() {

    this.crear = function(imagenes) { return axios.post('/data/Imagenes', imagenes) }
    this.editar = function(imagenes) { return axios.put('/data/Imagenes/' + imagenes.id, imagenes) }
    this.obtener = function() { return axios('/data/Imagenes') }
    this.one = function(id) { return axios('/data/Imagenes/' + id) }
    this.eliminar = function(id) { return axios.delete('/data/Imagenes/' + id) }

});
