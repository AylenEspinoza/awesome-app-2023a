//importando expressjs
import express from 'express';
//Importando http-status
import httpStatus from 'http-status';
//Importando Path
import path from 'path';
//Importando el enrutador
import adminRouter from './routes/admin.routes.js';
import shopRouter from './routes/shop.routes.js';

//Importando Root_DIR
import { ROOT_DIR } from './helpers/paths.js';

//Crear una instancia de express
const app = express();

//Middleware de proceso de bosy-parser
app.use(express.urlencoded({ extended: true }));

//Se registra el Middleware para el servidor de archivos estaticos
app.use(express.static(path.join(ROOT_DIR, 'public')));

// Se agrega ruta de administrador
app.use('/admin', adminRouter);
// Se agrega ruta shop
app.use(shopRouter);
//Registrando Middleware Para el error 404
app.use((req, res) => {
    res.status(httpStatus.NOT_FOUND).sendFile(path.resolve('views', '404.html'));
});

//Definir puertos
const port = 3000;
const ip = "0.0.0.0";

//Arrancando el server
app.listen(port, ip, (err) => {
    console.log("📣 Sirviendo en http://localhost:3000");
    //console.log(`📣 Sirviendo en http://${process.env.IP}:${process.env.PORT}`);
})