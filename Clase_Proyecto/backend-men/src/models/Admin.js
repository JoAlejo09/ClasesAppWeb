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

// Hash de contraseña antes de guardar
administradorSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.contrasena = await bcrypt.hash(this.password, 10);
  next();
});

// Método para comparar contraseñas
administradorSchema.methods.compararContrasena = async function (contrasenaIngresada) {
  return await bcrypt.compare(contrasenaIngresada, this.password);
};

export default model('Administrador', administradorSchema);
