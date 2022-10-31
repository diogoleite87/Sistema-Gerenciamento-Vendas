import { prisma } from "../../../../prisma/client";
import { GroupProducts } from "../../dtos/GroupProductsDAO";

export class GetGroupProductsAvaiableUseCase {

    async execute(): Promise<GroupProducts[]> {

        const products: GroupProducts[] = await prisma.$queryRaw`
            SELECT name, model, color, size, SUM(value) as valueSum, COUNT(*) as count
            FROM products
            WHERE id NOT IN(SELECT product_id
                            FROM sold
                            WHERE product_id = id)
            GROUP BY (name, model, color, size)
            ORDER BY (name)`

        return products
    }
}