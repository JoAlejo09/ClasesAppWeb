import { Schema, model } from 'mongoose';

const pacienteSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  cedula: { type: String, required: true, unique: true },
  correo: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  telefono: { type: String },
  carrera: { type: String },
  nivel: { type: String }, // Ej. "3ro", "4to", "Graduado", etc.
  fechaNacimiento: { type: Date },

  confirmEmail: { type: Boolean, default: false },
  token: { type: String }, // para confirmar cuenta o restablecer contraseña

  rol: { type: String, default: "paciente" }, // paciente o admin en general

  respuestasCuestionarios: [
    { type: Schema.Types.ObjectId, ref: 'RespuestaCuestionario' }
  ],

  alertas: [
    { type: Schema.Types.ObjectId, ref: 'Alerta' }
  ],

  creadoEn: { type: Date, default: Date.now },
  actualizadoEn: { type: Date, default: Date.now }
});

// Encriptar contraseña antes de guardar
import bcrypt from 'bcryptjs';

pacienteSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Método para comparar contraseñas
pacienteSchema.methods.compararContrasena = async function (input) {
  return await bcrypt.compare(input, this.password);
};

export default model('Paciente', pacienteSchema);
