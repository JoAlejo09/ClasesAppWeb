import app from './server.js'
import connection from './database.js'

app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`)
})
connection()


/* sIEMPRE EL PRIMER ARCHIVO QUE SE EJECUTA ES 
  "main": "index.js", */