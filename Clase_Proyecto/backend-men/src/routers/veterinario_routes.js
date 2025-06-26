import {Router} from 'express'
import { login, comprobarTokenPasword, confirmarMail, crearNuevoPassword, recuperarPassword, registro, perfil, actualizarPerfil, actualizarPassword } from '../controllers/veterinario_controller.js'
import { verificarTokenJWT } from '../middlewares/JWT.js'
const router = Router()

/*
GET -> CUANDO SOLO SE LLAMA
POST -> CUANDO SE QUIERE ENVIAR DATOS */


router.post('/registro',registro)
router.get('/confirmar/:token',confirmarMail)

router.post('/recuperarpassword',recuperarPassword)
router.get('/recuperarpassword/:token',comprobarTokenPasword)
router.post('/nuevopassword/:token',crearNuevoPassword)

router.post('/login',login)
router.get('/perfil',verificarTokenJWT,perfil)
router.put('/veterinario/:id',verificarTokenJWT,actualizarPerfil)
router.put('/veterinario/actualizarpassword/:id',verificarTokenJWT,actualizarPassword)


export default router