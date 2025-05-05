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
    .then(r=>r.json())
    //.then(p=>console.log(p))
    .catch(e=>console.log(e))

 const obtenerProductos= async()=>{
    try {
        const r = await fetch('https://fakestoreapi.com/products')
        const p = await r.json()
        console.log(p)
    } catch (e) {
        console.log(e)
        
    }    
}
//obtenerProductos()
//LOCAL STORAGE -> Lo implementa el frontend porque debe guardar la informacion que proviene del usuario
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((r)=>r.json())
    .then(data=>{
        let user = {
            name: data.name,
            email: data.email
        }
        localStorage(user)
    })
    .catch((e) => console.log(e))

    const localStorage = (data)=>{
    localStorage.setItem('user',JSON.stringify(data))
}
//MANEJO DE MODULOS
//comando npm init -y
