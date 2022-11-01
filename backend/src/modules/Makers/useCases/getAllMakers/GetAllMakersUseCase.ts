import { Maker } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllMakersUseCase {

    async execute(): Promise<Maker[]> {

        const allMakers = await prisma.maker.findMany({

        });

        return allMakers;
    }
}