// models/Usuario.js
import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const usuarioSchema = new Schema({
  usuario: { type: String, required: true, unique: true },
  correo: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
  rol: { type: Schema.Types.ObjectId, ref: 'Rol' },
 // recursos: [{ type: Schema.Types.ObjectId, ref: 'Recurso' }]
},{
  timestamps: true
});

usuarioSchema.pre('save', async function (next) {
  if (!this.isModified('contrasena')) return next();
  this.contrasena = await bcrypt.hash(this.contrasena, 10);
  next();
});

usuarioSchema.methods.compararContrasena = async function (contrasenaIngresada) {
  return await bcrypt.compare(contrasenaIngresada, this.contrasena);
};

export default model('Usuario', usuarioSchema);
