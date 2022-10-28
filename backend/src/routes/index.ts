import { Router } from "express";

import { clientRoutes } from "./client.routes";
import { productRoutes } from "./product.routes";

const routes = Router();

routes.use("/clients", clientRoutes);
routes.use("/products", productRoutes)

export { routes }