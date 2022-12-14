import { AppError } from '../../../../errors/AppError';
import { prisma } from '../../../../prisma/client'
import { CreateProductSoldDTO } from "../../dtos/CreateProductSoldDTO";

export class CreateProductSoldUseCase {
    async execute(data: CreateProductSoldDTO): Promise<void> {

        const productExists = await prisma.product.findUnique({
            where: {
                id: data.product_id
            }
        });

        const clientExists = await prisma.client.findUnique({
            where: {
                cell: data.client_cell
            }
        })

        const productAlreadySold = await prisma.sold.findFirst({
            where: {
                product_id: data.product_id
            }
        })

        if (!productExists) {
            throw new AppError("Product does not exists!");
        } else if (!clientExists) {
            throw new AppError("Client does not exists!");
        } else if (productAlreadySold) {
            throw new AppError("Product already sold!")
        }

        await prisma.sold.create({
            data
        })
    }
}