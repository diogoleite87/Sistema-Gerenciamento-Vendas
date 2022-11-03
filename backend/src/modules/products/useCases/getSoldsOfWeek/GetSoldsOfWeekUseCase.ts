import moment from "moment";
import { prisma } from "../../../../prisma/client";
import { SoldsOfWeek } from "../../dtos/SoldsOfWeekDAO";

export class GetSoldsOfWeekUseCase {

    async execute(dateRequest: string): Promise<SoldsOfWeek[]> {

        const soldsOfWeek: SoldsOfWeek[] = []

        for (let i = 0; i < 7; i++) {

            let dayOfWeek = moment(dateRequest).add(- 6 + i, 'days')
            let sql = `SELECT SUM(s.value_sold) AS sumsolds, COUNT(*) AS countsolds FROM sold s WHERE CAST (s.created_at AS Text) LIKE '${dayOfWeek.format('YYYY-MM-DD')}%'`

            let jsonDayOfWeek = await prisma.$queryRawUnsafe(sql);

            let jsonDayOfWeekFormated: SoldsOfWeek = {
                sumSolds: Number(jsonDayOfWeek[0].sumsolds),
                countSolds: Number(jsonDayOfWeek[0].countsolds)
            }

            soldsOfWeek.push(jsonDayOfWeekFormated)
        }

        return soldsOfWeek
    }
}