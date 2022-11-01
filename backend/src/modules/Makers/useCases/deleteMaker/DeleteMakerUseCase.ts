import { Maker } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class DeleteMakerUseCase {

    async execute(name: string): Promise<Maker> {

        const nameExists = await prisma.maker.findUnique({
            where: {
                name
            }
        })

        if (!nameExists) {
            throw new AppError('Maker dos not exists!');
        }

        const makerDeleted = await prisma.maker.delete({
            where: {
                name
            }
        })

        return makerDeleted;
    }
}