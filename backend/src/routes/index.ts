import { Router } from "express";

import { clientRoutes } from "./client.routes";
import { productRoutes } from "./product.routes";
import { soldRoutes } from "./sold.routes";
import { makerRoutes } from "./maker.routes";
import { variationRoutes } from "./variation.routes";

const routes = Router();

routes.use("/clients", clientRoutes);
routes.use("/products", productRoutes)
routes.use("/solds", soldRoutes);
routes.use("/makers", makerRoutes);
routes.use("/variations", variationRoutes);

export { routes }