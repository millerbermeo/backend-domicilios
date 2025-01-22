import { Request, Response } from "express";
import { EstadosPedidosServices } from "./estados-pedidos.services";

export class EstadosPedidosController {
    private estadosPedidosServices: EstadosPedidosServices

    constructor() {
        this.estadosPedidosServices = new EstadosPedidosServices()
    }

    ListarEstadosPedidos = async(req: Request, res: Response) => {
        try {
            const estados = await this.estadosPedidosServices.getAllEstadosPedidos(res);
            res.status(200).json(estados);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            }
        }
    }
}