import { Request, Response } from "express";
import { GetAllColorsUseCase } from "./GetAllColorsUseCase";

export class GetAllColorsController {

    async handle(req: Request, res: Response) {

        const getAllColorsUseCase = new GetAllColorsUseCase();

        const allColors = await getAllColorsUseCase.execute();

        return res.status(201).json(allColors);
    }
}