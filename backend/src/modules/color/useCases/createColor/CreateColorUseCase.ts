import { Color } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class CreateColorUseCase {

    async execute(name: string): Promise<Color> {

        const colorAlreadyExists = await prisma.color.findUnique({

            where: {
                name
            }
        })

        if (colorAlreadyExists) {

            throw new AppError("Color already exists!");
        }

        const colorCreated = await prisma.color.create({

            data: {
                name
            }
        })

        return colorCreated;
    }
}