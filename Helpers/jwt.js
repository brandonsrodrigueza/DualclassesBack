const jwt = require('jsonwebtoken');

const generarJWT = (id) => {
    return new Promise((resolve,reject) => {
        const payload = {
            id
        };
        jwt.sign(payload,process.env.JWT_SECRET_KEY, {
            expiresIn: '12h'
        }, ( err, token ) => {
            if(err) {
                console.log(err);
                reject('No se pudo generar JWt');
            } else {
                resolve(token);
            }
        });

    });
}

module.exports = {
    generarJWT
}