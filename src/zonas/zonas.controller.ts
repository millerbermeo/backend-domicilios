import { NextFunction, Request, Response } from "express";
import { ZonasServices } from "./zonas.services";
import { CreateZonaDto } from "./dto/create-zona.dto";
import { UpdateZonaDto } from "./dto/update-zona.dto";

export class ZonasController {

    private zonasServices: ZonasServices

    constructor() {
        this.zonasServices = new ZonasServices()
    }

    public listarZonas = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const zonas = await this.zonasServices.getAllZonas();
            res.status(200).json(zonas);  // Asegúrate de enviar la respuesta en lugar de devolverla
        } catch (error) {
            next(error);
        }
    }

    public obtenerZona = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const zona = await this.zonasServices.getZonaById(req.params.id);
            res.status(200).json(zona);
        } catch (error) {
            next(error);
        }
    }

    public crearZona = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const zonaCreada = await this.zonasServices.createZona(req.body as CreateZonaDto);
            res.status(201).json(zonaCreada);
        } catch (error) {
            next(error);
        }
    }

    public actualizarzona = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const zonaActualizada = await this.zonasServices.updateZona(req.params.id, req.body as UpdateZonaDto);
            res.status(200).json(zonaActualizada);
        } catch (error) {
            next(error);
        }
    }

    public eliminarZona = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            await this.zonasServices.deleteZona(req.params.id);
            res.status(204).send();  // Enviar una respuesta vacía para el código 204
        } catch (error) {
            next(error);
        }
    }
}