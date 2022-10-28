import { Product } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateProductDTO } from "../../dtos/CreateProductDTO";

export class CreateProductUseCase {
    async execute(data: CreateProductDTO): Promise<Product> {

        const product = await prisma.product.create({
            data
        })

        return product
    }
}