import { Router } from "express"
import { CreateMakerController } from "../modules/Makers/useCases/createMaker/CreateMakerController";
import { CreateVariationController } from "../modules/Makers/useCases/createVariation/CreateVariationController";
import { DeleteMakerController } from "../modules/Makers/useCases/deleteMaker/DeleteMakerController";
import { GetAllMakersController } from "../modules/Makers/useCases/getAllMakers/GetAllMakersController";

const getAllMakersController = new GetAllMakersController();
const createMakerController = new CreateMakerController();
const deleteMakerController = new DeleteMakerController();
const createVariationController = new CreateVariationController();

const makerRoutes = Router();

makerRoutes.get('/', getAllMakersController.handle);
makerRoutes.post('/:name', createMakerController.handle);
makerRoutes.delete('/:name', deleteMakerController.handle);
makerRoutes.post('/variations/:nameMaker/:nameVariation', createVariationController.handle);

export { makerRoutes }