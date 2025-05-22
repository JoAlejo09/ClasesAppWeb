import {Schema,model} from 'mongoose'
import bcrypt from 'bcryptjs'

const veterinarioSchema = new Schema({
    nombre:{
        type:String,//Tipo de dato
        required:true, //Valor requerido
        trim:true /*Quita espacios adelante y atras */
    },
    apellido:{
        type:String,
        required:true,
        trim:true
    },
    direccion:{
        type:String,
        default:null,
        trim:true
    },
    celular:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    },
    token:{
        type:String,
        default:null
    },
    confirmEmail:{
        type:Boolean,
        default:false
    },
    rol:{
        type:String,
        default:"veterinario"
    }

},{
    //CUANDO SE CREE UN REGISTRO TAMBIEN SE CREE LOS 
    //CAMPOS CUANDO SE A CREADO Y CUANDO SE HAN ACTUALIZADO
    timestamp:true
})