import { Product } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class DeleteProductUsecase {

    async execute(id: number) {

        const clientAlredyExists = await prisma.product.findUnique({

            where: {
                id
            }
        })

        if (!clientAlredyExists) {
            throw new AppError("Product do not exists!")
        }

        await prisma.product.delete({
            where: {
                id
            }
        })
    }
}