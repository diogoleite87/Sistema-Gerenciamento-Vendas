import { Request, Response } from "express";
import { DeleteProductUsecase } from "./DeleteProductUseCase";

export class DeleteProductController {

    async handle(req: Request, res: Response) {

        const id = req.params.id
        const deleteProductUseCase = new DeleteProductUsecase();

        await deleteProductUseCase.execute(parseInt(id));

        return res.status(201).send()
    }
}