import { Router } from "express"
import { CreateProductController } from "../modules/products/useCases/createProduct/CreaseProcuctController";
import { CreateProductSoldController } from "../modules/products/useCases/createProductSold/CreateProductSoldController";
import { GetAllProductsController } from "../modules/products/useCases/getAllProducts/GetAllProductsController";
import { GetAllProductsSoldsController } from "../modules/products/useCases/getAllProductsSolds/GetAllProductsSoldsController";

const createProductController = new CreateProductController();
const getAllProductsController = new GetAllProductsController();
const createProductSoldController = new CreateProductSoldController();
const getAllProductsSoldsController = new GetAllProductsSoldsController();

const productRoutes = Router();

productRoutes.post("/", createProductController.handle)
productRoutes.get("/", getAllProductsController.handle)
productRoutes.post("/sold", createProductSoldController.handle)
productRoutes.get("/sold", getAllProductsSoldsController.handle)

export { productRoutes }