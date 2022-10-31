import { Request, Response } from "express";
import { GroupProducts } from "../../dtos/GroupProductsDAO";
import { GetGroupProductsAvaiableUseCase } from "./GetGroupProductsAvaiableController";

export class GetGroupProductsAvaiableController {

    async handle(req: Request, res: Response) {

        const getGroupProductsAvaiableUseCase = new GetGroupProductsAvaiableUseCase();

        const result = await getGroupProductsAvaiableUseCase.execute();

        const resultFormated: GroupProducts[] = []

        for (let i = 0; i < result.length; i++) {

            resultFormated.push({
                "name": result[i].name,
                "model": result[i].model,
                "color": result[i].color,
                "size": result[i].size,
                "valuesum": result[i].valuesum,
                "count": Number(result[i].count),
            })
        }

        return res.status(201).json(resultFormated);
    }
}