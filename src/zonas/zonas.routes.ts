import { Router } from 'express';
import { ZonasController } from './zonas.controller';
import { validateDto } from '../middlewares/validate-dto';
import { CreateZonaDto } from './dto/create-zona.dto';
import { UpdateZonaDto } from './dto/update-zona.dto';

const zonasController = new ZonasController()

 const router = Router();


router.get('/', zonasController.listarZonas);
router.get('/:id', zonasController.obtenerZona);
router.post('/', validateDto(CreateZonaDto), zonasController.crearZona);
router.put('/:id', validateDto(UpdateZonaDto), zonasController.actualizarzona);
router.delete('/:id', zonasController.eliminarZona);

export default router