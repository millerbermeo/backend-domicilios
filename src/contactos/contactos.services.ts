import { Response } from "express";
import { pool } from "../db/conexion";

export class ContactosServices {
    async getAllContactos(res: Response) {
        const query = 'SELECT * FROM public.contactos'
        const result = await pool.query(query)
        res.json(result.rows)
    }
}