import { Router } from 'express';
import { RolesController } from './roles.controller';

const rolesController = new RolesController()

 const router = Router();

router.get('/', rolesController.ListarRoles)

export default router