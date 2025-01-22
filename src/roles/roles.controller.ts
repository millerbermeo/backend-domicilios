import { Request, Response } from "express";
import { RolesServices } from "./roles.services";

export class RolesController {

    private rolesServices: RolesServices

    constructor() {
        this.rolesServices = new RolesServices()
    }

    ListarRoles = async (req: Request, res: Response) => {
        try {
            const roles = await this.rolesServices.getAllRoles(res);
            res.status(200).json(roles);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            }
        }
    }
}