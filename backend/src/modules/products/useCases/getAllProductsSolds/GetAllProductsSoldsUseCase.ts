import { Product } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllProductsSoldUseCase {

    async execute(): Promise<Product[]> {

        const products: Product[] | PromiseLike<Product[]> = await prisma.$queryRaw`
        SELECT * 
        FROM products p
        WHERE p.id IN (
            SELECT s.product_id
            FROM sold s
            WHERE s.product_id = p.id
        )`


        return products
    }
}