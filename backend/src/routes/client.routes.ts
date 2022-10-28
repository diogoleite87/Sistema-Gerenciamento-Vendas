import { Router } from "express"
import { CreateClientController } from "../modules/clients/useCases/createClient/CreaseClientController";
import { GetAllClientsController } from "../modules/clients/useCases/getAllClients/GetAllClientsController";

const createClientController = new CreateClientController();
const getAllClientsController = new GetAllClientsController();

const clientRoutes = Router();

clientRoutes.post("/", createClientController.handle)
clientRoutes.get("/", getAllClientsController.handle)

export { clientRoutes }