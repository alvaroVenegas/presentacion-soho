const mongoose = require('mongoose');

const urlDb = 'mongodb://localhost:27017/presentacion-ejemplo'

const connect = async () => {
    try{
        const db = await mongoose.connect(urlDb, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Connected with db in collection: ' + db.connection.name)
    }catch(error){
        console.log('Error to connect with db')
    }
}

module.exports = {
    connect

}