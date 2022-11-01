import { Router } from "express"
import { CreateColorController } from "../modules/color/useCases/createColor/CreateColorController";
import { DeleteColorController } from "../modules/color/useCases/deleteColor/DeleteColorController";
import { GetAllColorsController } from "../modules/color/useCases/getAllColors/GetAllColorsController";

const deleteColorController = new DeleteColorController();
const createColorController = new CreateColorController();
const getAllColorsController = new GetAllColorsController();

const colorRoutes = Router();

colorRoutes.delete('/:name', deleteColorController.handle);
colorRoutes.post('/:name', createColorController.handle);
colorRoutes.get('/', getAllColorsController.handle);

export { colorRoutes }