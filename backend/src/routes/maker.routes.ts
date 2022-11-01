import { Router } from "express"
import { CreateMakerController } from "../modules/Makers/useCases/createMaker/CreateMakerController";
import { GetAllMakersController } from "../modules/Makers/useCases/getAllMakers/GetAllMakersController";

const getAllMakersController = new GetAllMakersController();
const createMakerController = new CreateMakerController();

const makerRoutes = Router();

makerRoutes.get('/', getAllMakersController.handle);
makerRoutes.post('/:name', createMakerController.handle);

export { makerRoutes }