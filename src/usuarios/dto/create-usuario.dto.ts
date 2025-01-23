import { IsString, IsInt, IsOptional, IsEmail, IsEnum } from 'class-validator';
import { EstadoUser } from '../../enums/estado.enum';

export class CreateUsuarioDto {
    @IsString({ message: 'El nombre es obligatorio y debe ser una cadena de texto.' })
    nombre: string;

    @IsOptional()
    @IsString({ message: 'El apellido, si se proporciona, debe ser una cadena de texto.' })
    apellido: string;

    @IsString({ message: 'La identificación es obligatoria y debe ser una cadena de texto.' })
    identificacion: string;

    @IsOptional()
    @IsEmail({}, { message: 'Si se proporciona, el correo debe ser válido.' })
    email: string;

    @IsString({ message: 'El teléfono es obligatorio y debe ser una cadena de texto.' })
    telefono: string;

    @IsOptional()
    @IsString({ message: 'La foto, si se proporciona, debe ser una cadena de texto.' })
    foto: string;

    @IsOptional()
    @IsString({ message: 'La dirección, si se proporciona, debe ser una cadena de texto.' })
    direccion: string;

    @IsEnum(EstadoUser, { message: 'El estado debe ser uno de los valores de EstadoUser.' })
    estado: string;

    @IsOptional()
    @IsInt({ message: 'El rol debe ser un número entero.' })
    roles: number;
}
