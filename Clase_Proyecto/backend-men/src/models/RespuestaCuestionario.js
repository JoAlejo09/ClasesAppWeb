import { Schema, model } from 'mongoose';

const respuestaSchema = new Schema({
  paciente: { 
    type: Schema.Types.ObjectId, 
    ref: 'Paciente' 
  },
  cuestionario: { 
    type: Schema.Types.ObjectId, 
    ref: 'Cuestionario' },
  respuestas:{
    type: [String],
    required:true
  },
  puntajeTotal:{
    type: Number,
    required: true
  },
  fechaRespuesta: { 
    type: Date, 
    default: Date.now 
  }
},{
  timestamps: true   
});
export default model('RespuestaCuestionario', respuestaSchema);