const mongoose = require('mongoose');

const dbConnection = () => {
    
    mongoose.connect('mongodb+srv://Dualclasses:1u6uto8e2021@cluster0.elhav.mongodb.net/DualclassesDB', {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        const db = mongoose.connection;
        db.on('unhandledRejection', (reason, promise) => {
            console.log('Entre al Rejection:', promise, 'reason:', reason);
            throw new Error('Error en la conexion de la DB');
          });
        db.once('open', function() {
            console.log("Conectado Exitosamente a la DB");
        });    
}

module.exports = {
    dbConnection
}