import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client"

export class DeleteClientUseCase {

    async execute(cell: string) {

        const clientAlredyExists = await prisma.client.findUnique({

            where: {
                cell
            }
        })

        if (!clientAlredyExists) {
            throw new AppError('Client does not exists!');
        } else if (cell == '00000000000') {
            throw new AppError("Client 'Anônimo' can't be deleted!")
        } else {

            await prisma.sold.updateMany({

                where: {
                    client_cell: cell
                },

                data: {
                    client_cell: '00000000000'
                }
            })
        }

        await prisma.client.delete({
            where: {
                cell
            }
        })
    }
}