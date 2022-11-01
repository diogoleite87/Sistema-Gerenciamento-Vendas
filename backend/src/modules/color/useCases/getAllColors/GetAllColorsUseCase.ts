import { Color } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllColorsUseCase {

    async execute(): Promise<Color[]> {

        const allColors = await prisma.color.findMany({

        })

        return allColors;
    }
}