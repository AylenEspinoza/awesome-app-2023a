// Importando el enrutador de express
import { Router } from 'express';
// Importando funciones del controlador
import { getAddProduct, postAddProduct } from '../controllers/products.controller.js'

// Creando una instancia del enrutador de express
const router = Router();

// Datos en memoria volatil
export const products = [];

// GET /admin/add-product
router.get('/add-product', getAddProduct);

// POST /admin/add-product
router.post('/add-product', postAddProduct);

// POST /admin/add-product
router.post('/add-product', (req, res) => {
  // Realizaremos la desestructuracion de
  // "name" de la petición
  const { title } = req.body;
  // Agregamos el dato en la base de datos
  products.push(title);
  // Redireccionando
  res.redirect('/');
});

// Exportando el enrutador admin
export default router;
