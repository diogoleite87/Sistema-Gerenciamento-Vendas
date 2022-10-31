import { Router } from "express"
import { CreateProductController } from "../modules/products/useCases/createProduct/CreaseProcuctController";
import { CreateProductSoldController } from "../modules/products/useCases/createProductSold/CreateProductSoldController";
import { DeleteProductController } from "../modules/products/useCases/deleteProduct/DeleteProductController";
import { DeleteProductSoldController } from "../modules/products/useCases/deleteProductSold/DeleteProductSoldController";
import { GetAllProductsController } from "../modules/products/useCases/getAllProducts/GetAllProductsController";
import { GetAllProductsAvaiableController } from "../modules/products/useCases/getAllProductsAvailable/GetAllProductsAvaiableController";
import { GetAllProductsSoldsController } from "../modules/products/useCases/getAllProductsSolds/GetAllProductsSoldsController";
import { GetGroupProductsAvaiableController } from "../modules/products/useCases/getGroupProductsAvaiable/GetGroupProductsAvaiableUseCase";

const createProductController = new CreateProductController();
const getAllProductsController = new GetAllProductsController();
const getAllProductsAvaiableController = new GetAllProductsAvaiableController();
const deleteProductController = new DeleteProductController();
const getGroupProductsAvaiableController = new GetGroupProductsAvaiableController();

const productRoutes = Router();

productRoutes.post("/", createProductController.handle)
productRoutes.get("/", getAllProductsController.handle)
productRoutes.get("/avaiable", getAllProductsAvaiableController.handle)
productRoutes.delete("/:id", deleteProductController.handle)
productRoutes.get("/group/avaiable", getGroupProductsAvaiableController.handle)

export { productRoutes }