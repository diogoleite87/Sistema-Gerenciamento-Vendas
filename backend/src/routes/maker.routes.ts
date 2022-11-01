import { Router } from "express"
import { CreateMakerController } from "../modules/Makers/useCases/createMaker/CreateMakerController";
import { CreateVariationController } from "../modules/Makers/useCases/createVariation/CreateVariationController";
import { DeleteMakerController } from "../modules/Makers/useCases/deleteMaker/DeleteMakerController";
import { GetAllMakersController } from "../modules/Makers/useCases/getAllMakers/GetAllMakersController";

const getAllMakersController = new GetAllMakersController();
const createMakerController = new CreateMakerController();
const deleteMakerController = new DeleteMakerController();

const makerRoutes = Router();

makerRoutes.get('/', getAllMakersController.handle);
makerRoutes.post('/:name', createMakerController.handle);
makerRoutes.delete('/:name', deleteMakerController.handle);

export { makerRoutes }