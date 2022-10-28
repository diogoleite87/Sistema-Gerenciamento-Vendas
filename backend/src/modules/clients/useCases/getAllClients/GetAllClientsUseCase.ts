import { Client } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllClientsUseCase {

    async execute(): Promise<Client[]> {

        const clients = await prisma.client.findMany({
            orderBy: {
                name: "asc"
            }
        })

        return clients
    }
}