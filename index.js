//instalar npm install nodemon para cambios hotreload
//levantar el servidor desde la consola con npm run start:dev (ya esta configurado en este package.json)


const express = require('express');
const {dbConnection} = require('./Database/config');

// se inicializa el servidor de express

const app = express();

// base de datos
dbConnection();

//rutas

app.get('/',(req, res) => {
    res.json({
        ok: true,
        msg: 'Inicio del servidor'
    });
});




app.listen(4000,() => {
    console.log("Servidor corriendo en el puerto 3000");
});
