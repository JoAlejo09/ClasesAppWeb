
import Administrador from "../models/Admin.js"
import sendMailToRegister from "../config/nodemailer.js"


const registro = async (req,res)=>{
    const {correo, password} = req.body
    if(Object.values(req.body).includes("")){
        return res.status(400).json({msg:"Lo sentimos debe llenar todos los campos"})
    }

    const verificarEmailBDD = await Administrador.findOne({correo})
    if(verificarEmailBDD){
        return res.status(400).json({msg:"Lo sentimos el email ya se encuentra registrado"})
    }
    const nuevoAdministrador = new Administrador(req.body)

    const registro = async (req, res) =>{
    nuevoAdministrador.password = await nuevoAdministrador.encrypPassword(password)
    const token = nuevoAdministrador.crearToken()
    await sendMailToRegister(correo,token)
    await nuevoAdministrador.save()
    res.status(200).json({
        msg:"Revisa tu correo electrónico para confirmar tu cuenta"
    })
    }
}
export {
    registro
}
