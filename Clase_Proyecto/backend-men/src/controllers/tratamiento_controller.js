import Tratamiento from "../models/Tratamiento.js";
import mongoose from "mongoose";

const registrarTratamiento = async (req, res)=>{
    const {paciente} = req.body
    if(!mongoose.Types.ObjectId.isValid(paciente)) return res.status(404).json({msg:"Debe ingresar un id valido"});
    await Tratamiento.create(req.body)
    res.status(200).json({msg:"Registro exitoso del Tratamiento"})
}

const detallePaciente = async (req,res) =>{
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el veterinario ${id}`});
    const paciente = await Paciente.findById(id).select("-createdAt -updatedAt -__v").populate('veterinario','_id nombre apellido')
    const tratamientos = await Tratamiento.find().where('paciente').equals(id)
    res.status(200).json({
        paciente,
        tratamientos
    })
}
const eliminarTratamiento = async (req, res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe ese tratamiento`})
    await Tratamiento.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:"Tratamiento eliminado exitosamente"})

}
export
{
    registrarTratamiento,
    detallePaciente,
    eliminarTratamiento
}