import { Request, Response } from "express";
import { GetAllMakersUseCase } from "./GetAllMakersUseCase";

export class GetAllMakersController {

    async handle(req: Request, res: Response) {

        const getAllMakersUseCase = new GetAllMakersUseCase();

        const allMakers = await getAllMakersUseCase.execute();

        return res.status(201).json(allMakers);
    }
}