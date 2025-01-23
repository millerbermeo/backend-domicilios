import { Request, Response, NextFunction } from 'express';
import { UserServices } from './user.services';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update.usuario.dto';

export class UserController {
  private userService: UserServices;

  constructor() {
    this.userService = new UserServices();
  }

  public listarUsuarios = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const usuarios = await this.userService.getAllUsers();
      res.status(200).json(usuarios);  // Asegúrate de enviar la respuesta en lugar de devolverla
    } catch (error) {
      next(error);
    }
  }

  public obtenerUsuario = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const usuario = await this.userService.getUserById(req.params.id);
      res.status(200).json(usuario);
    } catch (error) {
      next(error);
    }
  }

  public crearUsuario = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const usuarioCreado = await this.userService.createUser(req.body as CreateUsuarioDto);
      res.status(201).json(usuarioCreado);
    } catch (error) {
      next(error);
    }
  }

  public actualizarUsuario = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const usuarioActualizado = await this.userService.updateUser(req.params.id, req.body as UpdateUsuarioDto);
      res.status(200).json(usuarioActualizado);
    } catch (error) {
      next(error);
    }
  }

  public eliminarUsuario = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await this.userService.deleteUser(req.params.id);
      res.status(204).send();  // Enviar una respuesta vacía para el código 204
    } catch (error) {
      next(error);
    }
  }
}
