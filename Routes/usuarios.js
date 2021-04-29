/*
Ruta: /api/usuarios
*/
const {Router} = require('express');

const{getUsuarios, crearUsuario} = require('../Controllers/usuarios');
const { validarJWT } = require('../Middlewares/validar-jwt');

const router = Router();

router.get('/',validarJWT,getUsuarios);

router.post('/', crearUsuario);

module.exports = router;