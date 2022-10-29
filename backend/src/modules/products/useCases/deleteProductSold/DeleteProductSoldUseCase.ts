import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class DeleteProductSoldUseCase {

    async execute(product_id: number, client_cell: string): Promise<void> {

        const soldAlredyExists = await prisma.sold.findFirst({

            where: {
                product_id,
                client_cell
            }
        })

        if (!soldAlredyExists) {
            throw new AppError("Sold do not exists!")
        }

        await prisma.sold.delete({
            where: {
                id: soldAlredyExists.id
            }
        })

    }
}