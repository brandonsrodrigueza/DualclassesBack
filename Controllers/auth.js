const {response} = require('express');
const Usuario = require('../Models/usuario');
const bycrpt = require('bcryptjs');
const { generarJWT } = require('../Helpers/jwt');

const login = async (req,res) => {

    const {email, password} = req.body;

    try {

        //verificar email
        const ususarioDB = await Usuario.findOne({email});

        if(!ususarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario o Contraseña incorrecto'
            });
        }

        //verificar password
        const validPassword = bycrpt.compareSync(password, ususarioDB.password);

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }

        //Generar JWT

        const token = await generarJWT(ususarioDB.id);
    
        res.json({
            ok: true,
            token
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte con soporte de Dualclasses'
        })
    }
}

module.exports = {
    login
}