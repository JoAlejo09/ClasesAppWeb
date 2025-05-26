import {Router} from 'express'
import {registro} from '../controllers/administrador_controller.js'

const router = Router()

router.post('/registro',registro)

export default router