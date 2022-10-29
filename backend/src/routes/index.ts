import { Router } from "express";

import { clientRoutes } from "./client.routes";
import { productRoutes } from "./product.routes";
import { soldRoutes } from "./sold.routes";

const routes = Router();

routes.use("/clients", clientRoutes);
routes.use("/products", productRoutes)
routes.use("/solds", soldRoutes)

export { routes }