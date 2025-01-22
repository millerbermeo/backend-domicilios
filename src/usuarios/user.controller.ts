import { Request, Response } from "express";
import { UserServices } from "./user.services";

export class UserController {
    private userServices: UserServices;

    constructor() {
        this.userServices = new UserServices();
    }

    listarUsuarios = async (req: Request, res: Response) => {
        try {
            const usuarios = await this.userServices.getAllUsers(res);
            res.status(200).json(usuarios);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            }
        }
    };
}
