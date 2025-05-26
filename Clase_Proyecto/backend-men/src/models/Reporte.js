// models/Reporte.js
import { Schema, model } from 'mongoose';

const reporteSchema = new Schema({
  paciente: { 
    type: Schema.Types.ObjectId, 
    ref: 'Paciente' 
  },
  generadoPor: {
    type: Schema.Types.ObjectId, 
    ref: 'Administrador' 
  },
  resumen: {
    type: String,
    required: false
  },
  fecha: { 
    type: Date, 
    default: Date.now 
  },
  archivo:{
    type: String // url o path del PDF
  }
});

export default model('Reporte', reporteSchema);
