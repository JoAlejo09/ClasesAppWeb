import Paciente from "../models/Paciente.js"
const registrarPaciente = async(req,res)=>{
    res.send({msg: "Registro del paciente"})
}

export{
    registrarPaciente
}