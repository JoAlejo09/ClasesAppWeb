import {Router} from 'express'
import {registro, comprobarTokenPassword, confirmarMail, registro,login, perfil, recuperarPassword} from '../controllers/administrador_controller.js'
import {verificarTokenJWT} from '../middleware/JWT.js'

const router = Router()

router.post('/registro',registro)
router.get('/confirmar/:token', confirmarMail)

router.post('/recuperarpassword',recuperarPassword)
router.get('/recuperarpassword/:token',comprobarTokenPasword)
router.post('/nuevopassword/:token',crearNuevoPassword)

router.post('/login',login)
router.get('/perfil',verificarTokenJWT,perfil)

export default router