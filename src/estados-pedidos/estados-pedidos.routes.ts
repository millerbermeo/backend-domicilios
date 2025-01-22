import { Router } from 'express';
import { EstadosPedidosController } from './estados-pedidos.controller';

const estadosPedidosController = new EstadosPedidosController()

 const router = Router();

router.get('/', estadosPedidosController.ListarEstadosPedidos)

export default router