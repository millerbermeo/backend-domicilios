import { Router } from 'express';
import { ZonasController } from './zonas.controller';

const zonasController = new ZonasController()

 const router = Router();

router.get('/', zonasController.ListarZonas)

export default router