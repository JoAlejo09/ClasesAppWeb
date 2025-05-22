import {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

const pacienteSchema = new Schema({  
    nombre:{
        type:String,
        required:true,
        trim
    }
})
export default model('Paciente', pacienteSchema)