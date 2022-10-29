import { Api } from "../providers";
import { Client, CreateClientDTO } from "../schemas";

const createClient = (client: CreateClientDTO) => Api.post(`/clients`, client);
const getAllClient = () => Api.get<Client[]>(`/clients`);
const deleteClient = (cell: string) => Api.delete(`clients/${cell}`);

export const ClientService = {
    createClient,
    getAllClient,
    deleteClient
}