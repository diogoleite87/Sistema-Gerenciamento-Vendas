import { Request, Response } from "express";
import { GetSoldsOfWeekUseCase } from "./GetSoldsOfWeekUseCase";

export class GetSoldsOfWeekController {

    async handle(req: Request, res: Response) {

        const dateToday = req.params.date;
        const count = req.params.count;

        const getSoldsOfWeekUseCase = new GetSoldsOfWeekUseCase();

        const soldsOfWeek = await getSoldsOfWeekUseCase.execute(dateToday, Number(count));

        return res.status(201).json(soldsOfWeek);
    }
}