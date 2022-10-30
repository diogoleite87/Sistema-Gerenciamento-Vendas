export type Product = {
    name: string;
    description: string;
    id: number;
    size: number;
    model: string;
    created_at: Date;
    updated_at: Date;
}

export type Client = {
    id: number
    cpf: string;
    email: string;
    cell: string;
    name: string;
    address: string;
    created_at: Date;
    updated_at: Date;
}