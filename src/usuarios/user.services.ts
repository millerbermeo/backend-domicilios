import { Response } from "express";
import { pool } from "../db/conexion";

export class UserServices {
    async getAllUsers(res: Response) {
        try {
            const query = 'SELECT * FROM public.user';
            const result = await pool.query(query);
            res.json(result.rows);
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error en getAllUsers:', error.message);
                throw new Error(`Error al consultar usuarios: ${error.message}`);
            }
        }
    }
}
