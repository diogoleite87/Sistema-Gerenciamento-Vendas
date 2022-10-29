import { Router } from "express"
import { CreateProductController } from "../modules/products/useCases/createProduct/CreaseProcuctController";
import { CreateProductSoldController } from "../modules/products/useCases/createProductSold/CreateProductSoldController";
import { DeleteProductController } from "../modules/products/useCases/deleteProduct/DeleteProductController";
import { DeleteProductSoldController } from "../modules/products/useCases/deleteProductSold/DeleteProductSoldController";
import { GetAllProductsController } from "../modules/products/useCases/getAllProducts/GetAllProductsController";
import { GetAllProductsAvaiableController } from "../modules/products/useCases/getAllProductsAvailable/GetAllProductsAvaiableController";
import { GetAllProductsSoldsController } from "../modules/products/useCases/getAllProductsSolds/GetAllProductsSoldsController";

const createProductController = new CreateProductController();
const getAllProductsController = new GetAllProductsController();
const getAllProductsAvaiableController = new GetAllProductsAvaiableController();
const deleteProductController = new DeleteProductController();

const productRoutes = Router();

productRoutes.post("/", createProductController.handle)
productRoutes.get("/", getAllProductsController.handle)
productRoutes.get("/avaiable", getAllProductsAvaiableController.handle)
productRoutes.delete("/:id", deleteProductController.handle)

export { productRoutes }