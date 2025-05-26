// models/Recurso.js
import { Schema, model } from 'mongoose';

const recursoSchema = new Schema({
  nombre: { type: String, required: true, unique: true }, // Nombre legible
  tipo: { type: String, enum: ['cuestionario', 'informe', 'nota', 'evaluacion', 'instruccion', 'otro'], default: 'otro' },
  descripcion: { type: String },
  ruta: { type: String }, // ruta frontend o backend donde se usa
  icono: { type: String }, // opcional, para mostrar en el panel (ej: "fa-notes", "mdi-chart")
  activo: { type: Boolean, default: true }, // para deshabilitar si es necesario
  rolesPermitidos: [{ type: Schema.Types.ObjectId, ref: 'Rol' }] // quién puede verlo
});

export default model('Recurso', recursoSchema);
