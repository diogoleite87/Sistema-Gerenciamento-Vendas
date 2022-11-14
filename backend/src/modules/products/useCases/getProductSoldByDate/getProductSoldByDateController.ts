import { Request, Response } from "express";
import moment from "moment";
import { GetProductSoldByDateUseCase } from "./getProductSoldUseCase";

export class GetProductSoldByDateController {

    async handle(req: Request, res: Response) {

        const date = req.params.date

        const getProductSoldByDateUseCase = new GetProductSoldByDateUseCase()

        const solds = await getProductSoldByDateUseCase.execute(date)

        return res.status(201).json(solds)
    }
}