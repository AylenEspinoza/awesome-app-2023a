// Importar los módulos necesarios
const path = require('path');

const httpErrorController = {};

httpErrorController.error404 = (req, res, next) => {
  res.status(404).render('error404', { pageTitle: 'Página no encontrada' });
};

// Controlador para otros errores
httpErrorController.errorHandler = (err, req, res, next) => {
  res.status(500).render('error', {
    pageTitle: 'Error en el servidor',
    errorMessage: 'Ha ocurrido un error en el servidor. Por favor, inténtalo de nuevo más tarde.'
  });
};

module.exports = httpErrorController;