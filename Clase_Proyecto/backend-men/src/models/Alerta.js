import { Schema, model } from 'mongoose';

const alertaSchema = new Schema({
  paciente: { 
    type: Schema.Types.ObjectId, 
    ref: 'Paciente' 
},
  descripcion:{ 
    type: String,
    required: true
},
  nivel: { 
    type: String, 
    enum: ['leve', 'moderado', 'grave'] 
},
  leido: {
    type: Boolean, 
    default: false 
},
  fecha: { 
    type: Date, 
    default: Date.now 
}
},{
  timestamps: true   
});
export default model('Alerta', alertaSchema);