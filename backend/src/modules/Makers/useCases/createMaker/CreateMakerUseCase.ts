import { Maker } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class CreateMakerUseCase {

    async execute(name: string): Promise<Maker> {

        const makerAreadyExists = await prisma.maker.findFirst({
            where: {
                name
            }
        })

        console.log(makerAreadyExists)

        if (makerAreadyExists) {
            throw new AppError("Maker already exists!")
        }

        const maker = prisma.maker.create({
            data: {
                name
            }
        })

        return maker
    }
}