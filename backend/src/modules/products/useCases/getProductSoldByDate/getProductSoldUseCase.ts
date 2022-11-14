import moment, { Moment } from "moment";
import { prisma } from "../../../../prisma/client";
import { ProductSoldByDateDAO } from "../../dtos/ProductSoldByDateDAO";

export class GetProductSoldByDateUseCase {

    async execute(date: string): Promise<ProductSoldByDateDAO[]> {

        const dateMoment = moment(date)

        const sql = `SELECT c.name as client, c.cell as cellclient, s.created_at as date, p.name as productname, p.model as productmodel, p.color as productcolor, s.value_sold as valuesold, c.id as idclient, p.id as idproduct 
        FROM sold s, products p, clients c
        WHERE s.product_id = p.id AND c.cell = s.client_cell AND CAST (s.created_at AS Text) LIKE '${dateMoment.format('YYYY-MM-DD')}%'`

        console.log(sql)

        const solds: ProductSoldByDateDAO[] = await prisma.$queryRawUnsafe(sql)

        return solds
    }
}