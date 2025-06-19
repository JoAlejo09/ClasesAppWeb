import jwt from "jsonwebtoken"
import Veterinario from "../models/Veterinario.js"

const crearTokenJWT = (id, rol)=>{
    return jwt.sign({id,rol}, process.env.JWT_SECRET, {expiresIn:"1d"})
}

const verificarTokenJWT = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ msg: "Acceso denegado: token no proporcionado" });
    }

    const { authorization } = req.headers;

    try {
        const token = authorization.split(" ")[1];
        const { id, rol } = jwt.verify(token, process.env.JWT_SECRET);

        // Buscar al usuario general
        const usuarioBDD = await Usuario.findById(id).select("-contrasena -__v").lean();
        if (!usuarioBDD) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        // Si el rol es administrador, buscar los datos extendidos
        if (rol === "administrador") {
            const adminBDD = await Administrador.findOne({ usuario: id }).lean();
            if (!adminBDD) {
                return res.status(404).json({ msg: "Administrador no encontrado" });
            }

            // Adjuntar info al request
            req.usuario = usuarioBDD;
            req.administrador = adminBDD;
        } else {
            // Otros roles podrían ir aquí (ej: veterinario)
            req.usuario = usuarioBDD;
        }

        next();

    } catch (error) {
        console.error(error);
        return res.status(401).json({ msg: "Token inválido o expirado" });
    }
};


export { 
    crearTokenJWT,
    verificarTokenJWT 
}