import { Router } from 'express';
import { UserController } from './user.controller';

const userController = new UserController();
 const router = Router();

router.get('/', userController.listarUsuarios)

export default router

