import { Router } from "express"
import { CreateProductController } from "../modules/products/useCases/createProduct/CreaseProcuctController";

const createProductController = new CreateProductController();

const productRoutes = Router();

productRoutes.post("/", createProductController.handle)

export { productRoutes }