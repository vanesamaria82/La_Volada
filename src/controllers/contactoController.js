//Creamos el objeto literal correspondiente al recurso Contacto-Capa controlador 
const controller = {
    index: function(req, res) {
        res.render('contacto');
    }

}

//Exportamos controller para requerirlo en contactoRouter.js
module.exports = controller;