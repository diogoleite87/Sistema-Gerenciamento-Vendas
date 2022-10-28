import { Request, Response } from "express";
import { CreateProductSoldDTO } from "../../dtos/CreateProductSoldDTO";
import { CreateProductSoldUseCase } from "./CreateProductSoldUseCase";

export class CreateProductSoldController {
    async handle(req: Request, res: Response) {

        const productSold: CreateProductSoldDTO = req.body;

        const createProductSoldUseCase = new CreateProductSoldUseCase();

        await createProductSoldUseCase.execute(productSold)

        return res.status(201).send();
    }

}