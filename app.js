// Importando Express
import express from 'express';
//Importando http-status
import httpStatus from 'http-status';
// Importando el gestor de rutas
import path from 'path';

// Importando el enrutador
import adminRouter from './routes/admin.routes.js';
import shopRouter from './routes/shop.routes.js';

// Creando la instancia de express
// que basicamente es un middleware
const app = express();

// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));

// Se agrega ruta de administrador
app.use('/admin',adminRouter);
// Se agrega ruta shop
app.use(shopRouter);
//Registrando el middleware para error 404
app.use((req, res)=>{
  res.status(httpStatus.NOT_FOUND).sendFile(path.resolve('views', 'error.html'));
  });

// Creando el servidor
// const server = http.createServer(app);
// Definir puertos
const port = 3000;
const ip= "0.0.0.0";
// Arrancando el server
app.listen(port, ip, ( err )=>{
  console.log("📢 Sirviendo en http://localhost:3000");
  console.log(`📢 Sirviendo en http://${process.env.IP}:${process.env.PORT}`);
});