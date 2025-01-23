import { Router } from 'express';
import { UserController } from './user.controller';
import { validateDto } from '../middlewares/validate-dto';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update.usuario.dto';

const userController = new UserController();

const router = Router();

router.get('/', userController.listarUsuarios);
router.get('/:id', userController.obtenerUsuario);
router.post('/', validateDto(CreateUsuarioDto), userController.crearUsuario);
router.put('/:id', validateDto(UpdateUsuarioDto), userController.actualizarUsuario);
router.delete('/:id', userController.eliminarUsuario);

export default router;
