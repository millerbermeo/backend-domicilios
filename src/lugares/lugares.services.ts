import { pool } from "../db/conexion";
import { Lugares } from "../entities/lugares.entity";
import { CreateLugaresDto } from "./dto/create-lugares.dto";
import { UpdateLugaresDto } from "./dto/update-lugares.dto";

export class LugaresServices {

    async getAllLugares(): Promise<Lugares[]> {
        const query = 'SELECT * FROM public.lugares'
        const result = await pool.query(query)
        return result.rows
    }

    async createLugares(dto: CreateLugaresDto): Promise<Lugares> {
        const { nombre, direccion, fk_zona } = dto

        const query = `
        INSERT INTO public.lugares (nombre, direccion, fk_zona)
        VALUES ($1, $2, $3)
        RETURNING *;
        `
        const values = [nombre, direccion, fk_zona]
        const result = await pool.query(query, values)
        return result.rows[0]
    }

    async getLugaresById(id: string): Promise<Lugares | null> {
        const query = 'SELECT * FROM public.lugares WHERE id = $1'
        const result = await pool.query(query, [id])
        return result.rows.length ? result.rows[0] : null;
    }

    async updateLugares(id: string, dto: UpdateLugaresDto): Promise<Lugares | null> {

        const { nombre, direccion, fk_zona } = dto

        const query = `UPDATE public.lugares SET nombre = $1, direccion = $2, fk_zona = $3
        WHERE id = $4
        RETURNING *;`

        const values = [nombre, direccion, fk_zona, id]

        const result = await pool.query(query, values)
        return result.rows.length ? result.rows[0] : null;
    }

    async deleteLugares(id: string): Promise<boolean> {
        const query = 'DELETE FROM public.lugares WHERE id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        return result.rows.length > 0;
    }
}