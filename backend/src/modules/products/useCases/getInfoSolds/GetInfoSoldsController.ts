import { Request, Response } from "express";
import { GetInfoSoldsUseCase } from "./GetInfoSoldsUseCase";

export class GetInfoSoldsController {

    async handle(req: Request, res: Response) {

        const getInfoSoldsUseCase = new GetInfoSoldsUseCase();

        const infoSolds = await getInfoSoldsUseCase.execute();

        return res.status(201).json(infoSolds)
    }
}