import { NextFunction, Request, Response } from "express";
import { LugaresServices } from "./lugares.services";
import { CreateLugaresDto } from "./dto/create-lugares.dto";
import { UpdateLugaresDto } from "./dto/update-lugares.dto";

export class LugaresController {
    private lugaresServices: LugaresServices

    constructor() {
        this.lugaresServices = new LugaresServices();
    }

    public listarLugares = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const lugares = await this.lugaresServices.getAllLugares();
            res.status(200).json(lugares);  // Asegúrate de enviar la respuesta en lugar de devolverla
        } catch (error) {
            next(error);
        }
    }

    public obtenerLugar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const lugar = await this.lugaresServices.getLugaresById(req.params.id);
          res.status(200).json(lugar);
        } catch (error) {
          next(error);
        }
    }

    public crearLugar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const lugarCreado = await this.lugaresServices.createLugares(req.body as CreateLugaresDto);
          res.status(201).json(lugarCreado);
        } catch (error) {
          next(error);
        }
    }

    public actualizarLugar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const lugarActualizado = await this.lugaresServices.updateLugares(req.params.id, req.body as UpdateLugaresDto);
          res.status(200).json(lugarActualizado);
        } catch (error) {
          next(error);
        }
      }
    
      public eliminarLugar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          await this.lugaresServices.deleteLugares(req.params.id);
          res.status(204).send();  // Enviar una respuesta vacía para el código 204
        } catch (error) {
          next(error);
        }
      }

}