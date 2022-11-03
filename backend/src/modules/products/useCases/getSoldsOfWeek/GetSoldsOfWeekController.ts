import { Request, Response } from "express";
import { GetSoldsOfWeekUseCase } from "./GetSoldsOfWeekUseCase";

export class GetSoldsOfWeekController {

    async handle(req: Request, res: Response) {

        const dateToday = req.params.date;

        const getSoldsOfWeekUseCase = new GetSoldsOfWeekUseCase();

        const soldsOfWeek = await getSoldsOfWeekUseCase.execute(dateToday);

        return res.status(201).json(soldsOfWeek);
    }
}