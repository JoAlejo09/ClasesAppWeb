
import Administrador from "../models/Admin.js"
import sendMailToRegister from "../config/nodemailer.js"


const registro = async (req,res)=>{
    try{
        const {correo, password} = req.body;

        if(Object.values(req.body).includes("")){
            return res.status(400).json({msg: "Lo sentimos debe llenar todo el formulario"})
        }
        const verificarEmailBDD = await Administrador.findOne({correo});
        if(verificarEmailBDD){
            return res.status(400).json(msg:"Lo sentimos el email ya se encuentra ocupado")
        }

        const nuevoAdministrador = new Administrador(req.body);
        nuevoAdministrador.password = await nuevoAdministrador.encryptPassword(password)

        const token = nuevoAdministrador.crearToken();
        await sendMailToRegister(correo, token);

        await nuevoAdministrador.save();
        res.status(200).json({
            msg: "Revisa tu correo electronico para confirmar tu cuenta"
        });
    }catch(error){
        console.error(error);
        res.status(500).json({
            msg:"Hubo error en el servidor"
        });
    }
}
export {
    registro
}
