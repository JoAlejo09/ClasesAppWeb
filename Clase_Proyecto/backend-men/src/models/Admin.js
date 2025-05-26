// models/Administrador.js
import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const administradorSchema = new Schema({
  nombre_completo: {
    type: String,
    required: true,
    trim: true
  },
  correo: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    default: ''
  },
  rol: {
    type: String,
    enum: ['admin', 'psicologo', 'tecnico'],
    default: 'admin'
  },
  token: {
    type: String,
    default: null
  },
  confirmEmail: {
    type: Boolean,
    default: false
  },
  activo: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});
//Metodos por defecto y personalizados

// Hash de contraseña antes de guardar

administradorSchema.methods.encryptPassword = async function name(password) {
    const salt = await bcrypt.genSalt(10)
    const passwordEncryp = await bcrypt.hash(password,salt)
    return passwordEncryp
}
administradorSchema.methods.createToken = function(){
    const tokenGenerado = this.token = Math.random().toString(36).slice(2)
    return tokenGenerado
}
export default model('Administrador', administradorSchema);
