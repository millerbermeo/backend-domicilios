import { IsInt, IsOptional, IsString } from "class-validator"

export class CreateLugaresDto {

    @IsString({ message: 'El nombre es obligatorio y debe ser una cadena de texto.' })
    nombre: string

    @IsOptional()
    @IsString({ message: 'La direccion, si se proporciona, debe ser una cadena de texto.' })
    direccion: string

    @IsInt({ message: 'La zona debe ser un número entero.' })
    fk_zona: number
}