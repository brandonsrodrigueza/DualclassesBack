/*
Ruta: /api/login
*/
const {Router} = require('express');
const {login} = require('../Controllers/auth');
const {check} = require('express-validator');
const { validarCampos } = require('../Middlewares/validar-campos');


const router = Router();


router.post('/', 
    [
        check('email', 'El Email es obligatorio').isEmail(),
        check('password','La contraseña es obligatoria').not().isEmpty(),
        validarCampos
    ],
    login
)



module.exports = router;