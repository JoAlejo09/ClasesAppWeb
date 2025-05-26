import express from 'express' //Manejo de express
import dotenv from 'dotenv' //Manejo de variables de entorno
import cors from 'cors'  //Permita la comunicacion frontend y backend

const app = express()
dotenv.config()

//Configuraciones
app.set('port', process.env.PORT || 3000)

//Middleware
app.use(cors()) //Todo lo que diga use significa que usa un middleware


app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Server on")
})

app.use('/api',routerAdministrador)
app.use((req,res)=> res.status(400).send("Endpoint no encontrado"))
export default app