import { Router } from "express";

import {getUsuario,getUsuarios,createUsuario,updateUsuario,deleteUsuario} from '../controllers/usuarios.controllers.js'

const router = Router()


router.get('/usuario/:id',getUsuario)
router.get('/usuarios',getUsuarios)
router.post('/usuario',createUsuario)
router.patch('/usuario/:id',updateUsuario)
router.delete('/usuario/:id',deleteUsuario)


export default router