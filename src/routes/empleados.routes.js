import { Router } from "express";

import {getEmpleado,getEmpleados,createEmpleados,updateEmpleado,deleteEmpleado} from '../controllers/empleados.controllers.js'

const router = Router()


router.get('/empleado/:id',getEmpleado)
router.get('/empleados',getEmpleados)
router.post('/empleados',createEmpleados)
router.patch('/empleado/:id',updateEmpleado)
router.delete('/empleado/:id',deleteEmpleado)


export default router


