import { Request, Response } from "express"
import { CreateClientUseCase } from "./CreateClientUseCase";
import { CreateClientDTO } from "../../dtos/CreateClientDTO"

export class CreateClientController {

    async handle(req: Request, res: Response) {

        const client: CreateClientDTO = req.body;

        const createClientUseCase = new CreateClientUseCase();

        const result = await createClientUseCase.execute(client)

        return res.status(201).json(result)
    }
}