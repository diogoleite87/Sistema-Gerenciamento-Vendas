import { Request, Response } from "express";
import { DeleteVariationUseCase } from "./DeleteVariationUseCase";

export class DeleteVariationController {

    async handle(req: Request, res: Response) {

        const name = req.params.name;

        const deleteVariationUseCase = new DeleteVariationUseCase();

        const variationDeleted = await deleteVariationUseCase.execute(name);

        return res.status(201).json(variationDeleted);
    }
}