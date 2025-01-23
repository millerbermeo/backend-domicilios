import { IsString, IsInt, IsOptional, IsEmail, IsEnum } from 'class-validator';
import { EstadoUser } from '../../enums/estado.enum';

export class UpdateUsuarioDto {
    @IsOptional()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsString()
    apellido: string;

    @IsOptional()
    @IsString()
    identificacion: string;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    telefono: string;

    @IsOptional()
    @IsString()
    foto: string;

    @IsOptional()
    @IsString()
    direccion: string;

    @IsOptional()
    @IsEnum(EstadoUser)
    estado: string;

    @IsOptional()
    @IsInt()
    roles: number;
}
