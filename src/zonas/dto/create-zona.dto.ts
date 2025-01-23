import { IsOptional, IsString } from "class-validator";

export class CreateZonaDto {

    @IsString({ message: 'El nombre es obligatorio y debe ser una cadena de texto.' })
    nombre: string;

    @IsOptional()
    @IsString({ message: 'La descripcion, si se proporciona, debe ser una cadena de texto.' })
    descripcion: string;
}