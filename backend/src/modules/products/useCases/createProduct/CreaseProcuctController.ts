import { Request, Response } from "express"
import { CreateProductUseCase as CreateProductUseCase } from "./CreateProductUseCase";
import { CreateProductDTO } from "../../dtos/CreateProductDTO";

export class CreateProductController {

    async handle(req: Request, res: Response) {

        const product: CreateProductDTO = req.body;

        const createProductUseCase = new CreateProductUseCase();

        const result = await createProductUseCase.execute(product)

        return res.status(201).json(result)
    }
}