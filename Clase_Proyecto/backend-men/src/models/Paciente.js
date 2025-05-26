import {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

const pacienteSchema = new Schema({  
    nombre:{
        type:String,
        required:true,
        trim
    },
    apellido:{
        type: String,
        required: true,
        trim
    },
    cedula:{
        type:String,
        required: true,
        trim
    },
    correo:{
        type:String,
        required:true
    }},{
  timestamps: true   
});
export default model('Paciente', pacienteSchema)