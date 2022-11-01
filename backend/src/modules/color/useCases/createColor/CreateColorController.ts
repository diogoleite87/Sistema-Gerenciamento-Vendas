import { Request, Response } from "express";
import { CreateColorUseCase } from "./CreateColorUseCase";

export class CreateColorController {

    async handle(req: Request, res: Response) {

        const name = req.params.name;

        const createColorUseCase = new CreateColorUseCase();

        const color = await createColorUseCase.execute(name);

        return res.status(201).json(color);
    }
}