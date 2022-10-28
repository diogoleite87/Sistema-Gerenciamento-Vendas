import { Router } from "express"
import { CreateProductController } from "../modules/products/useCases/createProduct/CreaseProcuctController";
import { CreateProductSoldController } from "../modules/products/useCases/createProductSold/CreateProductSoldController";

const createProductController = new CreateProductController();
const createProductSoldConstroller = new CreateProductSoldController();

const productRoutes = Router();

productRoutes.post("/", createProductController.handle)
productRoutes.post("/sold", createProductSoldConstroller.handle)

export { productRoutes }