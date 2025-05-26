// models/Administrador.js
import { Schema, model } from 'mongoose';

const administradorSchema = new Schema({
  usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
  nombre_completo: String,
  codigo_admin: String,
  telefono: String,
  area_responsable: String
});

export default model('Administrador', administradorSchema);
