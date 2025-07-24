import Tratamiento from "../models/Tratamiento.js";
import mongoose from "mongoose";
import {Stripe} from "stripe";

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
const pagarTratamiento = async (req, res)=>{
    const {paymentMethodId, treatmentId, cantidad, motivo} = req.body
    try {
        const tratamiento = await Tratamiento.findById(treatmentId).populate('paciente')
        if(!tratamiento) return res.status(404).json({message:"Tratamiento no encontrado"});
        if (tratamiento.estadoPago === "Pagado") return res.status(400).json({ message: "Este tratamiento ya fue pagado" });
        if (!paymentMethodId) return res.status(400).json({ message: "paymentMethodId no proporcionado" });

        let [cliente] = (await stripe.customers.list({ email:tratamiento.emailPropietario, limit: 1 })).data || [];
        if (!cliente) {
            cliente = await stripe.customers.create({ name:tratamiento.nombrePropietario, email:tratamiento.emailPropietario });
        }
        

        const payment = await stripe.paymentIntents.create({
            amount:cantidad,
            currency: "USD",
            description: motivo,
            payment_method: paymentMethodId,
            confirm: true,
            customer: cliente.id,
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: "never"
            }
        })

        if (payment.status === "succeeded") {
            await Tratamiento.findByIdAndUpdate(treatmentId, { estadoPago: "Pagado" });
            return res.status(200).json({ msg: "El pago se realizó exitosamente" })
        }
    } catch (error) {
        res.status(500).json({ msg: "Error al intentar pagar el tratamiento", error });
    }
}
export
{
    registrarTratamiento,
    detallePaciente,
    eliminarTratamiento,
    pagarTratamiento
}