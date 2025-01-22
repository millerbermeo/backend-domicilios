import { Response } from "express"
import { pool } from "../db/conexion"

export class EstadosPedidosServices {

    async getAllEstadosPedidos(res: Response) {
        const query = 'SELECT * FROM public.estados_pedidos'
        const result = await pool.query(query)
        res.json(result.rows)
    }

}