import { Router } from "express"
import { CreateVariationController } from "../modules/Makers/useCases/createVariation/CreateVariationController";
import { DeleteVariationController } from "../modules/Makers/useCases/deleteVariation/DeleteVariationController";
import { GetAllVariationController } from "../modules/Makers/useCases/getAllVariation/GetAllVariationController";
import { GetVariationController } from "../modules/Makers/useCases/getVariation/GetVariationController";

const createVariationController = new CreateVariationController();
const getAllVariationController = new GetAllVariationController();
const deleteVariationController = new DeleteVariationController();
const getVariationController = new GetVariationController();

const variationRoutes = Router();

variationRoutes.post('/:nameMaker/:nameVariation', createVariationController.handle);
variationRoutes.get('/', getAllVariationController.handle);
variationRoutes.delete('/:name', deleteVariationController.handle);
variationRoutes.get('/:nameMaker', getVariationController.handle);

export { variationRoutes }