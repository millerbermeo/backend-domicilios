import { IsString} from 'class-validator';

export class CreateRolDto {

    @IsString({ message: 'El nombre es obligatorio y debe ser una cadena de texto.' })
    nombre: string;

}