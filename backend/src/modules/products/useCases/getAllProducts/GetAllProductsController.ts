import { Response, Request } from "express";
import { GetAllProductsUseCase } from "./GetAllProductsUseCase";

export class GetAllProductsController {

    async handle(req: Request, res: Response) {

        const getAllProductsUseCase = new GetAllProductsUseCase();

        const result = await getAllProductsUseCase.execute();

        return res.status(201).json(result);
    }
}