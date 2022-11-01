import { Variation } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllVariationUseCase {

    async execute(): Promise<Variation[]> {

        const allVariation = await prisma.variation.findMany({

        })

        return allVariation;
    }
}