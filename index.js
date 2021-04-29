//instalar npm install nodemon para cambios hotreload
//levantar el servidor desde la consola con npm run start:dev (ya esta configurado en este package.json)


const express = require('express');
require('dotenv').config();
var cors = require('cors');
const {dbConnection} = require('./Database/config');

// se inicializa el servidor de express

const app = express();

// configuracion del cors

app.use(cors());

//Lectura y parseo del body
app.use(express.json());

// base de datos
dbConnection();
console.log(process.env);

//rutas

app.get('/',(req, res) => {
    res.json({
        ok: true,
        msg: 'Inicio del servidor'
    });
});

app.use('/api/usuarios',require('./Routes/usuarios'));
app.use('/api/login',require('./Routes/auth'));





app.listen(process.env.PORT,() => {
    console.log("Servidor corriendo en el puerto " + process.env.PORT);
});
