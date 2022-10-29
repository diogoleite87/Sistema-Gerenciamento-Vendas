import { Request, Response } from "express"
import { CreateClientDTO } from "../../dtos/CreateClientDTO"
import { UpdateClientUseCase } from "./UpdateClientUseCase";

export class UpdateClientController {

    async handle(req: Request, res: Response) {

        const cell = req.params.cell;
        const client: CreateClientDTO = req.body;

        const updateClientUseCase = new UpdateClientUseCase();

        const result = await updateClientUseCase.execute(cell, client)

        return res.status(201).json(result)
    }
}