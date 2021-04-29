const {response} = require('express'); 
const Usuario = require('../Models/usuario');
const bycrpt = require('bcryptjs');

const getUsuarios = async(req, res) => {

    const usuarios = await Usuario.find({},'nombre email role google');
    res.json({
        ok: true,
        usuarios,
        id: req.id
    });
}

const crearUsuario = async(req, res = response) => {

    const {email, password, nombre} = req.body;
    try {
        const usuario = new Usuario(req.body);

        //Encriptar password
        const pass = bycrpt.genSaltSync();
        usuario.password = bycrpt.hashSync(password,pass);
        
        //Guardar ususario
        await usuario.save();
        res.json({
            ok: true,
            usuario
        });
    }catch(error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... ver logs'
        })
    }
}

module.exports = {
    getUsuarios,
    crearUsuario
}