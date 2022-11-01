import { Request, Response } from "express";
import { DeleteMakerUseCase } from "./DeleteMakerUseCase";

export class DeleteMakerController {

    async handle(req: Request, res: Response) {

        const name = req.params.name;

        const deleteMakerUseCase = new DeleteMakerUseCase();

        const makeDeleted = await deleteMakerUseCase.execute(name);

        return res.status(201).json(makeDeleted);
    }
}