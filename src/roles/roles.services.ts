import { Response } from "express";
import { pool } from "../db/conexion";
import { CreateRolDto } from "./dto/create-rol.dto";
import { Roles } from "../entities/roles.entity";
import { UpdateRolDto } from "./dto/update-rol.dto";

export class RolesServices {

    async getAllRoles() {
        try {
            const query = 'SELECT * FROM public.roles';
            const result = await pool.query(query);
            return result.rows;
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error en getAllRoles:', error.message);
                throw new Error(`Error al consultar rol: ${error.message}`);
            }
        }
    }

    async createRol(dto: CreateRolDto): Promise<Roles> {
        const {nombre} = dto
        const query = ` INSERT INTO public.roles (nombre)
        VALUES ($1) RETURNING *;`

        const result = await pool.query(query, nombre)
        return result.rows[0]
    }

    async getRolById(id: string): Promise<Roles | null> {
        const query = 'SELECT * FROM public.roles WHERE id = $1';
        const result = await pool.query(query, [id]);
        return result.rows.length ? result.rows[0] : null;
    }

    async updateRol(id: string, dto: UpdateRolDto): Promise<Roles | null> {
        const {nombre} = dto

        const query = ` UPDATE public.roles
        SET nombre $1 WHERE id = $10 RETURNING *;`

        const result = await pool.query(query, nombre)

        return result.rows[0]
    }

    async deleteRol(id: string): Promise<boolean> {
        const query = 'DELETE FROM public.roles WHERE id = $1 RETURNING *;'
        const result = await pool.query(query, [id])
        return result.rows.length > 0
    }


}