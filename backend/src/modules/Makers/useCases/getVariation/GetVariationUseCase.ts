import { Variation } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetVariationUseCase {

    async execute(nameMaker: string): Promise<Variation[]> {

        const variation = await prisma.variation.findMany({
            where: {
                maker_name: nameMaker
            }
        })

        return variation;
    }
}