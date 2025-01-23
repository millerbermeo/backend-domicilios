import { pool } from '../db/conexion';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update.usuario.dto';
import { User } from '../entities/user.entity';

export class UserServices {
    // Obtener todos los usuarios
    async getAllUsers(): Promise<User[]> {
        const query = 'SELECT * FROM public.user';
        const result = await pool.query(query);
        return result.rows;
    }

    // Crear un nuevo usuario
    async createUser(dto: CreateUsuarioDto): Promise<User> {
        const { nombre, apellido, identificacion, email, telefono, foto, direccion, estado, roles } = dto;

        const query = `
            INSERT INTO public.user (nombre, apellido, identificacion, email, telefono, foto, direccion, estado, rolesId)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *;
        `;
        const values = [nombre, apellido, identificacion, email, telefono, foto, direccion, estado, roles];
        const result = await pool.query(query, values);

        return result.rows[0];
    }

    // Obtener un usuario por ID
    async getUserById(id: string): Promise<User | null> {
        const query = 'SELECT * FROM public.user WHERE id = $1';
        const result = await pool.query(query, [id]);
        return result.rows.length ? result.rows[0] : null;
    }

    // Actualizar usuario
    async updateUser(id: string, dto: UpdateUsuarioDto): Promise<User | null> {
        const { nombre, apellido, identificacion, email, telefono, foto, direccion, estado, roles } = dto;

        const query = `
            UPDATE public.user
            SET nombre = $1, apellido = $2, identificacion = $3, email = $4, telefono = $5, foto = $6, direccion = $7, estado = $8, rolesId = $9
            WHERE id = $10
            RETURNING *;
        `;
        const values = [nombre, apellido, identificacion, email, telefono, foto, direccion, estado, roles, id];
        const result = await pool.query(query, values);

        return result.rows.length ? result.rows[0] : null;
    }

    // Eliminar usuario
    async deleteUser(id: string): Promise<boolean> {
        const query = 'DELETE FROM public.user WHERE id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        return result.rows.length > 0;
    }
}
