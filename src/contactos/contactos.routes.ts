import { Router } from "express";
import { ContactosController } from "./contactos.controller";

const contactosController = new ContactosController()

 const router = Router();

router.get('/', contactosController.ListarContactos)

export default router