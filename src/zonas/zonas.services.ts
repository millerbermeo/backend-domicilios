import { Response } from "express";
import { pool } from "../db/conexion";

export class ZonasServices {
    async getAllZonas(res: Response) {
        try {
            const query = 'SELECT * FROM public.zonas'
            const result = await pool.query(query);
            res.json(result.rows);
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error en getAllZonas:', error.message);
                throw new Error(`Error al consultar rol: ${error.message}`);
            }
        }
    }
}