// models/Reporte.js
import { Schema, model } from 'mongoose';

const reporteSchema = new Schema({
  usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
  fecha: { type: Date, default: Date.now },
  titulo: String,
  descripcion: String,
  tipo: { type: String, enum: ['evaluacion', 'seguimiento', 'cuestionario', 'otro'], default: 'otro' },
  datos_adicionales: Schema.Types.Mixed
});

export default model('Reporte', reporteSchema);
