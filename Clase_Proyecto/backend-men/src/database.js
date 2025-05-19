import moongose from 'mongoose'
moongose.set('strictQuery', true)

const connection =async ()=>{
    try{
        const connection = await moongose.connect(process.env.MONGO_URI_LOCAL)
        console.log("Database is connected")
    }catch(e){
        console.log(e)
    }
}
export default connection