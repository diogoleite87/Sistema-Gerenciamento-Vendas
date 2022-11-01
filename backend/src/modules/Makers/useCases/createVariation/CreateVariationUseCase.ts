import { Variation } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class CreateVariationUseCase {

    async execute(nameMaker: string, nameVariation: string): Promise<Variation> {

        const variationAlreadyExists = await prisma.variation.findFirst({

            where: {
                name: nameVariation,
                maker_name: nameMaker
            }
        })

        if (variationAlreadyExists) {
            throw new AppError("Variation already exists!");
        }

        const variation = await prisma.variation.create({

            data: {
                name: nameVariation,
                maker_name: nameMaker
            }
        })

        return variation;
    }
}