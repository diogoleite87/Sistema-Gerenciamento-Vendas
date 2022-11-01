import { Request, Response } from "express";
import { GetAllVariationUseCase } from "./GetAllVariationUseCase";

export class GetAllVariationController {

    async handle(req: Request, res: Response) {

        const getAllVariationUseCase = new GetAllVariationUseCase();

        const allVariation = await getAllVariationUseCase.execute();

        return res.status(201).json(allVariation);
    }
}
