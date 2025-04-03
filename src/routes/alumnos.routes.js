import {Router} from 'express'
import { getAlumnos, createAlumnos, updateAlumnos, deleteAlumnos } from '../controllers/alumnos.controller.js';

const router = Router()

router.get('/alumnos',getAlumnos)

router.post('/alumnos',createAlumnos )

router.put('/alumnos',updateAlumnos)

router.delete('/alumnos',deleteAlumnos )

export default router