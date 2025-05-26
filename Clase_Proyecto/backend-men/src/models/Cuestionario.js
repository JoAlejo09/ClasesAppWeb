const cuestionarioSchema = new Schema({
  titulo: {
    type: String,
    required: true
},

  descripcion: {
    type: String,
    required: true
},
  tipo: { 
    type: String,
    enum: ['pdf', 'video', 'enlace', 'documento'] 
},
  url: {
    type: String
  },
  creadoPor: { 
    type: Schema.Types.ObjectId, 
    ref: 'Administrador' 
},
  fechaPublicacion: {
    type: Date,
    default: Date.now
},{
    //CUANDO SE CREE UN REGISTRO TAMBIEN SE CREE LOS 
    //CAMPOS CUANDO SE A CREADO Y CUANDO SE HAN ACTUALIZADO
    timestamp:true
});

export default model('Cuestionario', cuestionarioSchema);