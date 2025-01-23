import { NextFunction, Request, Response } from "express";
import { RolesServices } from "./roles.services";
import { CreateRolDto } from "./dto/create-rol.dto";

export class RolesController {

    private rolesServices: RolesServices

    constructor() {
        this.rolesServices = new RolesServices()
    }

    public ListarRoles = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const roles = await this.rolesServices.getAllRoles();
            res.status(200).json(roles);
        } catch (error) {
            next(error);
        }
    }


    public obtenerRol = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const rol = await this.rolesServices.getRolById(req.params.id)
            res.status(200).json(rol)
        } catch (error) {
            next(error);
        }
    }

    public crearRol = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const rolcreado = await this.rolesServices.createRol(req.body as CreateRolDto)
            res.status(201).json(rolcreado)
        } catch (error) {
            next(error);
        }
    }

    public actualizarRol = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const rolActualizado = await this.rolesServices.updateRol(req.params.id, req.body as CreateRolDto)
        } catch (error) {
            next(error);
        }
    }

    public eliminarRol = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            await this.rolesServices.deleteRol(req.params.id)
            res.status(204).send()
        } catch (error) {
            next(error);
        }
    }
}