import { IsString } from 'class-validator';

export class UpdateRolDto {
    @IsString({ message: 'El nombre es obligatorio y debe ser una cadena de texto.' })
    nombre: string;
}

