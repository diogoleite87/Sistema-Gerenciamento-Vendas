import { Request, Response } from "express";
import { GetVariationUseCase } from "./GetVariationUseCase";

export class GetVariationController {

    async handle(req: Request, res: Response) {

        const nameMaker = req.params.nameMaker;

        const getVariationUseCase = new GetVariationUseCase();

        const variations = await getVariationUseCase.execute(nameMaker);

        return res.status(201).json(variations);
    }
}