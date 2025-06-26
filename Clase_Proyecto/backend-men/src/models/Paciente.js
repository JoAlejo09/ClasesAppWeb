import mongoose, {Schema, model} from "mongoose";
import bcrypt from "bcryptjs";
const pacienteSchema = new Schema({
    nombrePropietario:{
        type: String,
        required: true,
        trim: true
    },
    cedulaPropietario:{
        type: String,
        required: true,
        trim: true
    },
    emailPropietario:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    passwordPropietario:{
        type: String,
        required: true,
    },
    celularPropietario:{
        type: String,
        required: true,
        trim: true
    },
    nombreMascota:{
        type: String,
        required: true,
        trim: true
    },
    avatarMascota:{
        type: String,
        required: true,
        trim: true
    },
    avatarMascotaID:{
        type: String,
        required: true,
        trim: true
    },
    avatarMascotaIA:{
        type: String,
        required: true,
        trim: true
    },
    tipoMascota:{
        type: String,
        required: true,
        trim: true
    },
    fechaNacimientoMascota:{
        type:Date,
        required:true,
        trim:true
    },
    sintomasMascota:{
        type:String,
        required:true,
        trim:true
    },
    fechaIngresoMascota:{
        type:Date,
        required:true,
        trim:true,
        default:Date.now
    },
    salidaMascota:{
        type:Date,
        trim:true,
        default:null
    },
    estadoMascota:{
        type:Boolean,
        default:true
    },
    rol:{
        type:String,
        default:"paciente"
    },
    veterinario:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Veterinario'
    }

},{
    timestamps:true
})
pacienteSchema.methods.encrypPassword = async function(password){
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}
pacienteSchema.methods.matchPassword = async function(password){
    return bcrypt.compare(password, this.passwordPropietario)
}
export default model ('Paciente', pacienteSchema)