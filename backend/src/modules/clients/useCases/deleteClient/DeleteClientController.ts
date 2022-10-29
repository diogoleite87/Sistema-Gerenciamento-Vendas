import { Request, Response } from "express";
import { DeleteClientUseCase } from "./DeleteClientUseCase";

export class DeleteClientController {

    async handle(req: Request, res: Response) {

        const cell = req.params.cell;

        const deleteClientUseCase = new DeleteClientUseCase();

        await deleteClientUseCase.execute(cell);

        return res.status(201).send();
    }
}