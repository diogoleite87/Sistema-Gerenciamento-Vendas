import { Request, Response } from "express";
import { CreateMakerUseCase } from "./CreateMakerUseCase";

export class CreateMakerController {

    async handle(req: Request, res: Response) {

        const name = req.params.name;

        const createMakerUseCase = new CreateMakerUseCase();

        const result = await createMakerUseCase.execute(name);

        return res.status(201).json(result);
    }
}