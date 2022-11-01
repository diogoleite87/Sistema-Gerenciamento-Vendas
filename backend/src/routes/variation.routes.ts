import { Router } from "express"
import { CreateVariationController } from "../modules/Makers/useCases/createVariation/CreateVariationController";
import { DeleteVariationController } from "../modules/Makers/useCases/deleteVariation/DeleteVariationController";
import { GetAllVariationController } from "../modules/Makers/useCases/getAllVariation/GetAllVariationController";

const createVariationController = new CreateVariationController();
const getAllVariationController = new GetAllVariationController();
const deleteVariationController = new DeleteVariationController();

const variationRoutes = Router();

variationRoutes.post('/:nameMaker/:nameVariation', createVariationController.handle);
variationRoutes.get('/', getAllVariationController.handle);
variationRoutes.delete('/:name', deleteVariationController.handle);

export { variationRoutes }