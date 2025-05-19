//NoSQL => MongoDB --> Para usar la base de datos y crear colecciones y documentos
// ODM => Mongoose --> Para poder implementarlo desde el servidor

import moongose from 'mongoose' 

moongose.set('strictQuery', true) //Establece que la consulta sea estricta que sea todos los campos de la coleccion


const connection =async ()=>{
    try{
        const connection = await moongose.connect(process.env.MONGODB_URI_LOCAL)
        console.log("Database is connected")
    }catch(e){
        console.log(e)
    }
}
export default connection