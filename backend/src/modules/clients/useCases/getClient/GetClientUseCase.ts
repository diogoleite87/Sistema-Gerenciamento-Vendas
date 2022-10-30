import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { Client } from "@prisma/client";


export class GetClientUseCase {

    async execute(cell: string): Promise<Client> {

        const client = await prisma.client.findUnique({

            where: {
                cell
            }
        })

        if (!client) {
            throw new AppError("Client does not exists!");
        }

        return client;
    }
}