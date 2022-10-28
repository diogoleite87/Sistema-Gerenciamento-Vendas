import { Router } from "express"
import { CreateClientController } from "../modules/clients/useCases/createClient/CreaseClientController";

const createClientController = new CreateClientController();

const clientRoutes = Router();

clientRoutes.post("/", createClientController.handle)

export { clientRoutes }