import app from './server.js'

app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`)
})
/* sIEMPRE EL PRIMER ARCHIVO QUE SE EJECUTA ES 
  "main": "index.js", */