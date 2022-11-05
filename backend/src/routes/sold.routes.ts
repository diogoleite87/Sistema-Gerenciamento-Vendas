import { Router } from "express"
import { CreateProductSoldController } from "../modules/products/useCases/createProductSold/CreateProductSoldController";
import { DeleteProductSoldController } from "../modules/products/useCases/deleteProductSold/DeleteProductSoldController";
import { GetAllProductsSoldsController } from "../modules/products/useCases/getAllProductsSolds/GetAllProductsSoldsController";
import { GetInfoSoldsController } from "../modules/products/useCases/getInfoSolds/GetInfoSoldsController";
import { GetSoldsOfWeekController } from "../modules/products/useCases/getSoldsOfWeek/GetSoldsOfWeekController";

const createProductSoldController = new CreateProductSoldController();
const getAllProductsSoldsController = new GetAllProductsSoldsController();
const deleteProductSoldController = new DeleteProductSoldController();
const getSoldsOfWeekController = new GetSoldsOfWeekController();
const getInfoSoldsController = new GetInfoSoldsController();

const soldRoutes = Router();

soldRoutes.post("/", createProductSoldController.handle)
soldRoutes.get("/", getAllProductsSoldsController.handle)
soldRoutes.delete("/:product_id/:client_cell", deleteProductSoldController.handle)
soldRoutes.get('/week/:date/:count', getSoldsOfWeekController.handle)
soldRoutes.get('/info', getInfoSoldsController.handle)

export { soldRoutes }