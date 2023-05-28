// Importando el enrutador de express
import { Router } from 'express';
//Importando path
import path from 'path';
//Importando ROOT_DIR
import { ROOT_DIR } from '../helpers/paths.js';

// Creando una instancia del enrutador de express
const router = Router();
// Creando datos en la memorian volatil
export const products = [];

// GET /add-product
router.get('/add-product', (req, res) => {
  console.log("📢 Sirviendo la ruta '/'");
  console.log(`ROOT_DIR: ${ROOT_DIR}`);
  res.sendFile(path.join(ROOT_DIR, 'views', 'add-product.html'));
});

// POST /add-product
router.post('/add-product', (req, res) => {
  // Realizaremos la desestructuracion de
  // "name" de la petición
  const { title } = req.body;
  // Agregamos el dato en la base de datos
  products.push(title);
  res.redirect('/');
});
export default router;
 