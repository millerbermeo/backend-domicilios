import { Router } from 'express';
import { LugaresController } from './lugares.controller';
import { validateDto } from '../middlewares/validate-dto';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../usuarios/dto/update.usuario.dto';

const lugaresController = new LugaresController();

const router = Router();

router.get('/', lugaresController.listarLugares);
router.get('/:id', lugaresController.obtenerLugar);
router.post('/', validateDto(CreateUsuarioDto), lugaresController.crearLugar);
router.put('/:id', validateDto(UpdateUsuarioDto), lugaresController.actualizarLugar);
router.delete('/:id', lugaresController.eliminarLugar);

export default router;