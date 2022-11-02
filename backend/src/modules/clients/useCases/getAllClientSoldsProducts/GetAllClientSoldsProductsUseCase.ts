import { prisma } from "../../../../prisma/client";
import { SoldsProductsDAO } from "../../dtos/SoldsProductsDAO";

export class GetAllClientSoldsProductsUseCase {

    async execute(cell: string): Promise<SoldsProductsDAO[]> {
        const sqlQuery = `SELECT p.name AS name_product, p.model AS model_product, p.color , p.size AS size_product, s.value_sold, c.name AS name_client, c.cell As cell_client, s.id AS id_sold, p.id AS id_product
                        FROM products p, sold s, clients c
                        WHERE p.id = s.product_id AND s.client_cell = c.cell AND c.cell = '${cell}'`

        const allSoldsProducts: SoldsProductsDAO[] | PromiseLike<SoldsProductsDAO[]> = prisma.$queryRawUnsafe(sqlQuery)

        return allSoldsProducts
    }
}