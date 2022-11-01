import { Color } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";


export class DeleteColorUseCase {

    async execute(name: string): Promise<Color> {

        const colorAlreadyExists = await prisma.color.findUnique({

            where: {
                name
            }
        })

        if (!colorAlreadyExists) {
            throw new AppError("Color does not exists!");
        }

        const colorDeleted = await prisma.color.delete({
            where: {
                name
            }
        })

        return colorDeleted;

    }
}