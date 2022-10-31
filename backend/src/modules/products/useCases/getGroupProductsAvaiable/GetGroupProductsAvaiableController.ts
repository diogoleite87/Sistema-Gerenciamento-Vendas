import { prisma } from "../../../../prisma/client";
import { GroupProducts } from "../../dtos/GroupProductsDAO";

export class GetGroupProductsAvaiableUseCase {

    async execute(): Promise<GroupProducts[]> {

        const products: GroupProducts[] = await prisma.$queryRaw`
            SELECT name, model, color, size, SUM(value) as valueSum, COUNT(*) as count
            FROM products p
            WHERE p.id NOT IN(SELECT product_id
                            FROM sold
                            WHERE product_id = p.id)
            GROUP BY (name, model, color, size)
            ORDER BY (name)`

        return products
    }
}