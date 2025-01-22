import { Response } from "express";
import { pool } from "../db/conexion";

export class RolesServices {
    async getAllRoles(res: Response) {
        try {
            const query = 'SELECT * FROM public.roles'
            const result = await pool.query(query);
            res.json(result.rows);
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error en getAllRoles:', error.message);
                throw new Error(`Error al consultar rol: ${error.message}`);
            }
        }
    }
}