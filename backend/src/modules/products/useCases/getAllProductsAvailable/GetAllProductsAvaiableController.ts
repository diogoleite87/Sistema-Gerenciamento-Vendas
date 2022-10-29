import { Response, Request } from "express";
import { GetAllProductsAvaiableUseCase } from "./GetAllProductsAvaiableUseCase";

export class GetAllProductsAvaiableController {

    async handle(req: Request, res: Response) {

        const getAllProductsAvaiableUseCase = new GetAllProductsAvaiableUseCase();

        const result = await getAllProductsAvaiableUseCase.execute();

        return res.status(201).json(result);
    }
}