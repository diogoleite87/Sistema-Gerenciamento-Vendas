import { Response, Request } from "express";
import { GetAllProductsSoldUseCase } from "./GetAllProductsSoldsUseCase";

export class GetAllProductsSoldsController {

    async handle(req: Request, res: Response) {

        const getAllProductsSoldsUseCase = new GetAllProductsSoldUseCase();

        const result = await getAllProductsSoldsUseCase.execute();

        return res.status(201).json(result);
    }
}