import { Client } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateClientDTO } from "../../dtos/CreateClientDTO";

export class CreateClientUseCase {
    async execute(data: CreateClientDTO): Promise<Client> {

        const clientAlreadyExists = await prisma.client.findUnique({
            where: {
                cell: data.cell
            }
        });

        if (clientAlreadyExists) {
            throw new AppError("Client already exists!");
        }

        const client = await prisma.client.create({
            data
        })

        return client
    }
}