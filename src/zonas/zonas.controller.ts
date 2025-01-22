import { Request, Response } from "express";
import { ZonasServices } from "./zonas.services";

export class ZonasController {

    private ronasServices: ZonasServices

    constructor() {
        this.ronasServices = new ZonasServices()
    }

    ListarZonas = async (req: Request, res: Response) => {
        try {
            const roles = await this.ronasServices.getAllZonas(res);
            res.status(200).json(roles);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            }
        }
    }
}