import { Router } from "express"
import { CreateProductController } from "../modules/products/useCases/createProduct/CreaseProcuctController";
import { CreateProductSoldController } from "../modules/products/useCases/createProductSold/CreateProductSoldController";
import { GetAllProductsController } from "../modules/products/useCases/getAllProducts/GetAllProductsController";

const createProductController = new CreateProductController();
const getAllProductsController = new GetAllProductsController();
const createProductSoldConstroller = new CreateProductSoldController();

const productRoutes = Router();

productRoutes.post("/", createProductController.handle)
productRoutes.get("/", getAllProductsController.handle)
productRoutes.post("/sold", createProductSoldConstroller.handle)

export { productRoutes }