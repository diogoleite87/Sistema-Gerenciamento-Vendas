import { Api } from "../providers";
import { Client, CreateClientDTO } from "../schemas";

const createClient = (client: CreateClientDTO) => Api.post(`/clients`, client);
const getAllClient = () => Api.get<Client[]>(`/clients`);
const deleteClient = (cell: string) => Api.delete(`clients/${cell}`);
const getClient = (cell: string) => Api.get<Client>(`clients/${cell}`);
const updateClient = (cell: string, client: CreateClientDTO) => Api.put(`clients/${cell}`, client);

export const ClientService = {
    createClient,
    getAllClient,
    deleteClient,
    updateClient,
    getClient
}