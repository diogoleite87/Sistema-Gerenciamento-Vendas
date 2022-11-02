import { Request, Response } from "express";
import { GetAllClientSoldsProductsUseCase } from "./GetAllClientSoldsProductsUseCase";

export class GetAllClientSoldsProductsController {

    async handle(req: Request, res: Response) {

        const cell = req.params.cell;

        const getAllClientSoldsProductsUseCase = new GetAllClientSoldsProductsUseCase();

        const allSoldsProducts = await getAllClientSoldsProductsUseCase.execute(cell);

        return res.status(201).json(allSoldsProducts)
    }
}