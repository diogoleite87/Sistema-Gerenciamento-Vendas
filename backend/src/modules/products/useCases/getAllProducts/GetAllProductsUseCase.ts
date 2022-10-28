import { Product } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllProductsUseCase {

    async execute(): Promise<Product[]> {
        const products = await prisma.product.findMany({

        })

        return products
    }
}