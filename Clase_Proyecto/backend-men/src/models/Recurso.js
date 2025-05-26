// models/Recurso.js
import { Schema, model } from 'mongoose';

const recursoSchema = new Schema({
  titulo:{
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true,
    trim: true
  },
  tipo: {
    type: String,
    enum: ['pdf', 'video', 'enlace', 'documento']
    required: true
  },
  url: {
    type: String
  },
    subidoPor: {
    type: Schema.Types.ObjectId, 
    ref: 'Administrador' 
  },
  fechaPublicacion:{ 
    type: Date,
    default: Date.now()
},{
    //CUANDO SE CREE UN REGISTRO TAMBIEN SE CREE LOS 
    //CAMPOS CUANDO SE A CREADO Y CUANDO SE HAN ACTUALIZADO
    timestamp:true
});

export default model('Recurso', recursoSchema);
