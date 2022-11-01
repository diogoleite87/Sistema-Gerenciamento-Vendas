import { Request, Response } from "express";
import { DeleteColorUseCase } from "./DeleteColorUseCase";

export class DeleteColorController {

    async handle(req: Request, res: Response) {

        const name = req.params.name;

        const deleteColorUseCase = new DeleteColorUseCase();

        const colorDeleted = await deleteColorUseCase.execute(name);

        return res.status(201).json(colorDeleted);
    }
}