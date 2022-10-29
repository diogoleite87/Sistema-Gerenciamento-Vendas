import { Request, Response } from "express";
import { DeleteProductSoldUseCase } from "./DeleteProductSoldUseCase";

export class DeleteProductSoldController {

    async handle(req: Request, res: Response) {

        const client_cell = req.params.client_cell;
        const product_id = req.params.product_id;

        const deleteProductSoldUseCase = new DeleteProductSoldUseCase();

        await deleteProductSoldUseCase.execute(parseInt(product_id), client_cell);

        return res.status(201).send();
    }
}