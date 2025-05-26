import { Schema, model } from 'mongoose';

const rolSchema = new Schema({
  nombre: { 
    type: String, 
    required: true, 
    unique: true 
},
  descripcion:{
    type: String,
    required: false
  }
});

export default model('Rol', rolSchema);