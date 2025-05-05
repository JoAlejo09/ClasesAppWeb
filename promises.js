//Promises

const  conexionBBExterna = (datosConexion)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexion OK"): reject("Conexion ERROR")
        },3000)
    })
}
conexionBBExterna(true)
//FORMAS DE LEER UN PROMISE
//1. USANDO .THEN Y .CATCH
    .then(r=>console.log(r)) //Captura cuando ha sido capturada una respuesta exitosa
    .catch(e=>console.log(e)) //Captura errores cuando retorna la promesa
//2. uso de await cdy async
async function conexionBBExternaMySQL (){
try {
    const r = await conexionBBExterna(true)
    console.log(r)
} catch (e) {
    console.log(e)
}
}
conexionBBExternaMySQL()
const productos = fetch('https://fakestoreapi.com/products')
    .then(r=>r.json)
    .catch(e=>console.log(e))

     git config --global user.email "josealejandro_pilavizuete@hotmail.com"
  git config --global user.name "JoseP"