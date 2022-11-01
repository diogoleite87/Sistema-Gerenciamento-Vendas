import { Router } from "express"
import { CreateVariationController } from "../modules/Makers/useCases/createVariation/CreateVariationController";
import { GetAllVariationController } from "../modules/Makers/useCases/getAllVariation/GetAllVariationController";

const createVariationController = new CreateVariationController();
const getAllVariationController = new GetAllVariationController();

const variationRoutes = Router();

variationRoutes.post('/:nameMaker/:nameVariation', createVariationController.handle);
variationRoutes.get('/', getAllVariationController.handle);

export { variationRoutes }