import { Request, Response } from "express";
import { ContactosServices } from "./contactos.services";

export class ContactosController {

    private contactosServices: ContactosServices

     constructor() {
            this.contactosServices = new ContactosServices()
    }

    ListarContactos = async (req: Request, res: Response) => {
        try {
            const contactos = await this.contactosServices.getAllContactos(res);
            res.status(200).json(contactos);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            }
        }
    }
    
}