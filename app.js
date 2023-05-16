// Importando expressjs
import express from 'express';
// Crear una instancia de express
const app = express(); // (req, res)=>{ UN MONTO DE CODIGO }

app.use(express.urlencoded({extended: true}));

// Registrar nuestro primer middleware
app.use((req, res, next ) => {
  console.log("⭐ Ejecutando el Middleware 1");
  // Invocando al siguiente middleware
  next();
 });
 app.use((req, res, next) => {
  console.log(`🪄 ${req.method} - ${req.url}`);
  next();
 });
 app.use('/about', (req, res)=>{
  res.send(`
  <h1 style="color: teal">About...</h1>
  <p style="color: #555"> Esta pagina creada para aprender 
  desarrollo web en Fullstack con JS</p>
  `);
 });

 //GET SED-PRODUCT
app.use('/add-product', (req, res,next)=>{
 if(req.method === "POST") return next();

  console.log("👣SIRVIENDO EL FORMULARIO");

    //sirviendo el formulario 
    res.send(`
    <form action="/add-product" method="POST">
    <label for="title">TITLE</label>
    <input id="title" type="text" name="title">
    <label for="title">DESCRIPTION</label>
    <input id="description" type="text" name="description">
    <button type="submit">Add product</button>
    </from>
    `);
});

//POST /ADD-PRODUCT
app.use('/add-product', (req, res)=>{
  //realizando extraccion de los datos en la peticion 
  for(const prop in req.body){
    console.log(`PROP: ${prop} : ${req.body[prop]}`);
  }
  //redireccionamiento
  res.redirect('/');
});

 app.use((req, res) => {
  console.log("⭐ Respondiendo al cliente");
  res.send(`
  <h1>Bienvenido a express</h1>
  <p>Este es mi software</p>
  `);
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