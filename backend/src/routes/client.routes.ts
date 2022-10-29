import { Router } from "express"
import { CreateClientController } from "../modules/clients/useCases/createClient/CreaseClientController";
import { DeleteClientController } from "../modules/clients/useCases/deleteClient/DeleteClientController";
import { GetAllClientsController } from "../modules/clients/useCases/getAllClients/GetAllClientsController";
import { UpdateClientController } from "../modules/clients/useCases/updateClient/UpdateClientController";

const createClientController = new CreateClientController();
const getAllClientsController = new GetAllClientsController();
const updateClientController = new UpdateClientController();
const deleteClientController = new DeleteClientController();

const clientRoutes = Router();

clientRoutes.post("/", createClientController.handle)
clientRoutes.get("/", getAllClientsController.handle)
clientRoutes.put("/:cell", updateClientController.handle)
clientRoutes.delete("/:cell", deleteClientController.handle)

export { clientRoutes }