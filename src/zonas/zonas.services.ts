import { Response } from "express";
import { pool } from "../db/conexion";
import { Zonas } from "../entities/zonas.entity";
import { CreateZonaDto } from "./dto/create-zona.dto";
import { UpdateZonaDto } from "./dto/update-zona.dto";

export class ZonasServices {

    async getAllZonas(): Promise<Zonas[]> {
        const query = 'SELECT * FROM public.zonas'
        const result = await pool.query(query)
        return result.rows;
    }

    async createZona(dto: CreateZonaDto): Promise<Zonas> {
        const { nombre, descripcion } = dto;

        const query = `
            INSERT INTO public.zonas (nombre, descripcion)
            VALUES ($1, $2)
            RETURNING *;
        `;
        const values = [nombre, descripcion];
        const result = await pool.query(query, values);

        return result.rows[0];
    }

    async getZonaById(id: string): Promise<Zonas | null> {
        const query = 'SELECT * FROM public.zonas WHERE id = $1';
        const result = await pool.query(query, [id]);
        return result.rows.length ? result.rows[0] : null;
    }

    async updateZona(id: string, dto: UpdateZonaDto): Promise<Zonas | null> {
        const { nombre, descripcion } = dto;

        const query = `
                UPDATE public.zonas
                SET nombre = $1, descripcion = $2
                WHERE id = $3
                RETURNING *;
            `;
        const values = [nombre, descripcion, id];
        const result = await pool.query(query, values);

        return result.rows.length ? result.rows[0] : null;
    }

    // Eliminar usuario
    async deleteZona(id: string): Promise<boolean> {
        const query = 'DELETE FROM public.zonas WHERE id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        return result.rows.length > 0;
    }
}