import { Client } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateClientDTO } from "../../dtos/CreateClientDTO";

export class UpdateClientUseCase {
    async execute(cell: string, data: CreateClientDTO): Promise<Client> {

        const clientAlreadyExists = await prisma.client.findUnique({
            where: {
                cell: cell
            }

        });

        if (!clientAlreadyExists) {
            throw new AppError("Client does not exists!");
        }

        const client = await prisma.client.update({

            where: {
                cell: cell
            },

            data
        });

        return client
    }
}