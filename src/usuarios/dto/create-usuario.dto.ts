import { IsString, IsInt, IsOptional, IsEmail, IsEnum } from 'class-validator';
import { EstadoUser } from '../../enums/estado.enum';

export class CreateUsuariosDto {

    @IsString()
    nombre: string;

    @IsOptional()
    @IsString()
    apellido: string;

    @IsString()
    identificacion: string

    @IsOptional()
    @IsEmail()
    email: string

    @IsString()
    telefono: string

    @IsOptional()
    @IsString()
    foto: string

    @IsOptional()
    @IsString()
    direccion: string

    @IsEnum(EstadoUser)
    estado: string
    
    @IsInt()
    roles: number
}