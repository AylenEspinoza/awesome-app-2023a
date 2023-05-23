// Importando el enrutador de express
import { Router } from 'express';
import { get } from 'http';

// Importando el gestor de rutas
import path from 'path';

// Creando una instancia del enrutador de express
const router = Router();

// GET /
//router.get('/', (req, res)=>{
  //console.log("📢 Sirviendo la ruta '/'");
  // Se contesta al server
  //res.send(`
   // <h1>Welcome to Express Js</h1>
    //<p>This is my awesome app! 😎</p>
  //`);
//});

// GET /
router.get('/', (req, res)=>{
  console.log("📢 Sirviendo la ruta '/'");
  res.sendFile(path.resolve('views','shop.html'));
});

// GET /about
router.get('/about', (req, res) => {
  console.log("📢 Sirviendo la ruta '/about'");
  // Se contesta al server
  res.send(`
    <h1>🪄 About...</h1>
    <p>App for Fullstack Web Dev Course I!</p>
  `);
});



export default router;