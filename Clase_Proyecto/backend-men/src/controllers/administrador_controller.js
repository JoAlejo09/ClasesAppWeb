/*
import Administrador from "../models/Admin.js"
import {sendMailToRegister/*, sendMailToRecoveryPassword} from "../config/nodemailer.js"
//import {crearTokenJWT} from "../middleware/JWT.js"

Metodo para crear

const registro = async (req, res)=>{
    const {correo, password} = req.body

    //Validacion que los campos esten llenos que ninguno tenga un espacio
    if(Object.values(req.body).includes("")){
        return res.status(400).json({msg: "Lo sentimos debe llenar todo el formulario"})
    }
    //Busca si existe un correo en el modelo Administrador
    const verificarEmailBDD = await Administrador.findOne({correo});

    if(verificarEmailBDD){
        return res.status(400).json({msg:"El e-mail ya se encuentra registrado"})
    }
    //Instancia para almacenar en la base de datos
    const nuevoAdministrador = new Administrador (req.body)
    nuevoAdministrador.password = await nuevoAdministrador.encryptPassword(password)
    const token = nuevoAdministrador.createToken()
    await sendMailToRegister(correo,token)
    await nuevoAdministrador.save()
    res.status(200).json({
            msg: "Revisa tu correo electronico para confirmar tu cuenta"
    });
    
}

// Metodo para crear
/*
const confirmarMail = async (req,res)=>{
    if(!(req.params.token)) return res.status(400).json({msg:"Lo sentimos, no se puede validar la cuenta"})
    const administradorBDD = await Administrador.findOne({token:req.params.token})
    if(!administradorBDD?.token) 
        return res.status(404).json({msg:"La cuenta ya ha sido confirmada"})
    
    administradorBDD.token = null
    administradorBDD.confirmEmail=true
    await administradorBDD.save()
    res.status(200).json({msg:"Token confirmado, ya puedes iniciar sesión"}) 
}
const recuperarPassword = async(req, res)=>{
    const {correo} = req.body
    if(Object.values(req.body).includes("")
        return res.status(404).json({msg:"Lo sentimos, debes llenar todos los campos"}))

    const administradorBDD = await Administrador.findOne({correo})

    if(!administradorBDD){
        return res.status(400).json({msg:"Lo sentimos, el usuario no se encuentra registrado"})
    }
    const token = administradorBDD.crearToken()
    administradorBDD.token = token
    await sendMailToRecoveryPassword(correo, token)
    await administradorBDD.save()
    res.status(200).json({msg:"Revisa tu correo electrónico para reestablecer tu cuenta"})
}
const comprobarTokenPassword = async(req, res)=>{
    if(!(req.params.token)) 
        return res.status(404).json({msg:"Lo sentimos, no se puede validar la cuenta"})
    const administradorBDD = await Administrador.findOne({token:req.params.token})
    
    if(administradorBDD?.token !== req.params.token) 
        return res.status(404).json({msg:"Lo sentimos, no se puede validar la cuenta"})
    await administradorBDD.save()
    res.status(200).json({msg:"Token confirmado, ya puedes crear tu nuevo password"})
}
const crearNuevoPassword = async (req, res)=>{
    const{password,confirmpassword} = req.body
    if (Object.values(req.body).includes("")) 
        return res.status(404).json({msg:"Lo sentimos, debes llenar todos los campos"})    
    
    if(password != confirmpassword) 
        return res.status(404).json({msg:"Lo sentimos, los passwords no coinciden"})

    const administradorBDD = await Administrador.findOne({token:req.params.token})
    if(administradorBDD?.token !== req.params.token) 
        return res.status(404).json({msg:"Lo sentimos, no se puede validar la cuenta"})

    administradorBDD.token = null
    administradorBDD.password = await administradorBDD.encrypPassword(password)
    await administradorBDD.save()
    res.status(200).json({msg:"Felicitaciones, ya puedes iniciar sesión con tu nuevo password"}) 
}
const login = async(req, res)=>{
    const(correo,contrasena) = req.body
    if (Object.values(req.body).includes("")) 
        return res.status(404).json({msg:"Lo sentimos, debes llenar todos los campos"})

    const administradorBDD = await Administrador.findOne({correo}).select("-status -__v -token -updatedAt -createdAt")
    if(administradorBDD?.confirmEmail===false) 
        return res.status(403).json({msg:"Lo sentimos, debe verificar su cuenta"})

    if(!veterinarioBDD) 
        return res.status(404).json({msg:"Lo sentimos, el usuario no se encuentra registrado"})

    const verificarPassword = await administradorBDD.matchPassword(contrasena)
    if(!verificarPassword)
        return res.status(404).json({msg:"Lo sentimos, el password no es el correcto"})
    
    const adminInfo = await Administrador.findOne({ usuario: usuarioBDD._id });
    const token = crearTokenJWT(adminInfo._id, adminInfo.rol)
        // Preparar respuesta
    res.status(200).json({
        token,
        usuario: {
            _id: usuarioBDD._id,
            correo: usuarioBDD.correo,
            rol: usuarioBDD.rol?.nombre || "Sin rol",
            ...(adminInfo && {
                nombre_completo: adminInfo.nombre_completo,
                telefono: adminInfo.telefono,
                area_responsable: adminInfo.area_responsable,
                codigo_admin: adminInfo.codigo_admin
            })
        }
    });
}
const perfil = (req, res)=>{
    delete req.adminInfo.token
    delete req.adminInfo.confirmEmail
    delete req.adminInfo.createdAt
    delete req.adminInfo.updatedAt
    delete req.adminInfo.__v
    res.status(200).json(req.adminInfo)
}
export {
    registro
    //, 
    // confirmarMail, 
    // recuperarPassword, 
    // comprobarTokenPassword, 
    // crearNuevoPassword,
    // login,
    // perfil
}*/

import Veterinario from "../models/Veterinario.js"

const registro = async (req,res)=>{
    const {email,password} = req.body
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarEmailBDD = await Veterinario.findOne({email})
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    const nuevoVeterinario = new Veterinario(req.body)
    nuevoVeterinario.password = await nuevoVeterinario.encrypPassword(password)
    nuevoVeterinario.crearToken()
    await nuevoVeterinario.save()
    res.status(200).json({nuevoVeterinario})
}



export {
    registro
}

