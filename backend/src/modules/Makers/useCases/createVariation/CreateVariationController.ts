import { Request, Response } from "express";
import { CreateVariationUseCase } from "./CreateVariationUseCase";

export class CreateVariationController {

    async handle(req: Request, res: Response) {

        const nameMaker = req.params.nameMaker;
        const nameVariation = req.params.nameVariation;

        const createVariationUseCase = new CreateVariationUseCase();

        const variation = await createVariationUseCase.execute(nameMaker, nameVariation);

        return res.status(201).json(variation);
    }
}