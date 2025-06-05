import {Router} from 'express'
import { login, comprobarTokenPasword, confirmarMail, crearNuevoPassword, recuperarPassword, registro } from '../controllers/veterinario_controller.js'
const router = Router()


router.post('/registro',registro)
router.get('/confirmar/:token',confirmarMail)

router.post('/recuperarpassword',recuperarPassword)
router.get('/recuperarpassword/:token',comprobarTokenPasword)
router.post('/nuevopassword/:token',crearNuevoPassword)

router.post('/login',login)

export default router