import { Request, Response } from "express"
import { GetClientUseCase } from "./GetClientUseCase";

export class GetClientController {

    async handle(req: Request, res: Response) {

        const cell = req.params.cell;

        const getClientUseCase = new GetClientUseCase();

        const client = await getClientUseCase.execute(cell);

        return res.status(201).json(client);
    }
}