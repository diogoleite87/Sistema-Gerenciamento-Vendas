import { Variation } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class DeleteVariationUseCase {

    async execute(name: string): Promise<Variation> {

        const variationAlreadyExists = await prisma.variation.findUnique({

            where: {
                name
            }
        });

        if (!variationAlreadyExists) {
            throw new AppError("Variation dos not exists!");
        }

        const variationDeleted = await prisma.variation.delete({
            where: {
                name
            }
        });

        return variationDeleted;
    }
}