import express from 'express' //Manejo de express
import dotenv from 'dotenv' //Manejo de variables de entorno
import cors from 'cors'  //Permita la comunicacion frontend y backend
//import routerAdministrador from './routers/administrador_routes.js'
import cloudinary from 'cloudinary'
import fileUpload from "express-fileupload"

import routerVeterinarios from './routers/veterinario_routes.js'
import routerPacientes from './routers/paciente_routes.js'
import routerTratamientos from './routers/tratamiento_routes.js'

const app = express()
dotenv.config()
cloudinary.config({ 
  cloud_name: process.env.cloud_name, 
  api_key: process.env.api_key, 
  api_secret: process.env.api_secret
});
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}));

//Configuraciones
app.set('port', process.env.PORT || 3000)

//Middleware
app.use(cors()) //Todo lo que diga use significa que usa un middleware

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Server on")
})

//app.use('/api',routerAdministrador)
app.use('/api',routerVeterinarios)
app.use('/api',routerPacientes)
app.use('/api',routerTratamientos)
app.use((req,res)=> res.status(400).send("Endpoint no encontrado - 404"))
export default app