import moment from "moment";
import { prisma } from "../../../../prisma/client";
import { InfoSolds } from "../../dtos/InfoSoldsDAO";

export class GetInfoSoldsUseCase {

    async execute(): Promise<InfoSolds> {

        let totalSumValueSolds = 0;
        let totalCountSolds = 0;

        for (let i = 0; i < 7; i++) {

            let dayOfWeek = moment().add(- (7 - 1) + i, 'days')
            let sql = `SELECT SUM(s.value_sold) AS sumsolds, COUNT(*) AS countsolds FROM sold s WHERE CAST (s.created_at AS Text) LIKE '${dayOfWeek.format('YYYY-MM-DD')}%'`

            let jsonDayOfWeek = await prisma.$queryRawUnsafe(sql);

            console.log(jsonDayOfWeek)

            totalSumValueSolds += jsonDayOfWeek[0].sumsolds;
            totalCountSolds += Number(jsonDayOfWeek[0].countsolds);

        }

        const infoSolds: InfoSolds = {
            totalSumValueSolds: totalSumValueSolds,
            totalCountSolds: totalCountSolds
        }

        return infoSolds;
    }
}